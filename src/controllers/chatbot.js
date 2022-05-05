const tarotsModel = require('../model/index');
const _ = require('lodash');

exports.reactChat = async (req, res, next) => {
  try {
    const input = req.body.input;
    let output = { msg: '무슨말인지 모르겠어요 ~' };
    if (input == '오늘의 운세') {
      output.msg = '안녕하세요. 오늘의 운세를 위한 타로카드를 선택해보세요. '
      const tarots = await getShuffleCards();
      output.tarots = tarots;
    }
    else if (typeof input == 'number') {
      const tarot = await tarotsModel.tarots.findOne({
        where: {
          id: input
        }
      });
      output.msg = '선택하신 타로카드 입니다.'
      output.tarot = tarot;
    }
    res.status(200).send(output);
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

async function getShuffleCards() {
  try {
    const tarots = await tarotsModel.tarots.findAll({ attributes: ['id'] });
    const tarotIds = [];
    for (let tarot of tarots) {
      tarotIds.push(tarot.id);
    }
    const shuffle = _.shuffle(tarotIds);
    // console.log(shuffle);
    return shuffle;
  } catch (err) {
    throw err;
  }
};
