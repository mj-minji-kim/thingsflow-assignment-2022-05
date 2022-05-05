// process.env.NODE_ENV = 'development';
// const env = process.env.NODE_ENV;
// const request = require('supertest');
const TarotModel = require('../src/model/index');
const fs = require('fs');

const tarots = [
  { id: 1, name: 'The Star : 별 카드.', description: '점술가의 상징인 카드다. 희망을 나타내는 카드이면서, 그 희망을 손에 넣기까지의 혼란을 나타내기도. 어두운 밤에 길을 가며 지표로 삼는 길잡이 별이 이 카드의 이미지다.', image: '' },
  { id: 2, name: 'The Moon : 달 카드.', description: '여성의 상징인 카드인 동시에 정신적인 힘을 최고로 고양시켜주는 카드이기도 하다. 점술의 기본이 되는 영력을 많이 가진 사람에게 자주 나타나는 카드. 외향적인 태양 카드에 비해 내성적인 카드다.', image: '' },
  { id: 3, name: 'The Sun : 태양 카드.', description: '외향적인 힘을 상징하는 카드다. 남성의 상징이며, 육체적인 힘, 영향력, 건강 등을 나타낸다. 주로 외부에 미치는 영향을 가리킨다.', image: '' },
]

async function asyncCall() {
  await TarotModel.sequelize.sync();
  for (var tarot of tarots) {
    let imgPath;
    switch (tarot.id) {
      case 1:
        imgPath = `../src/model/img/thestar.jpeg`
        break;
      case 2:
        imgPath = `../src/model/img/themoon.jpeg`
        break;
      case 3:
        imgPath = `../src/model/img/thesun.jpeg`
        break;
    }
    const imgData = fs
      .readFileSync(imgPath)
      .toString("base64");
    tarot.image = imgData;
    delete tarot.temp;
    // console.log(tarot);
    await TarotModel.tarots.create(tarot);
  }

}

asyncCall();