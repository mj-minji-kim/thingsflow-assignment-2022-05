// process.env.NODE_ENV = 'development';
// const env = process.env.NODE_ENV;
const request = require('supertest');
const app = require('../app').app;
const db = require('../src/model/index');
const _ = require('lodash');
async function asyncCall() {
  const url = `/`;
  let shuffles = [];
  before(async () => {
    await db.sequelize.sync();
  })

  describe('reactChat - 오늘의 운세', async () => {
    it('should return 200 status code', async () => {
      const body = {
        input: '오늘의 운세'
      }
      await request(app).get(url).send(body)
        .expect(200)
        .then((res, err) => {
          console.log(res.body);
          if (res.body && res.body.tarots) {
            shuffles = res.body.tarots;
          }
          if (err)
            throw err;
        });
    });
  });
  describe('reactChat - 카드 선택', async () => {
    it('should return 200 status code', async () => {
      const random = _.random(0, shuffles.length - 1);
      const body = {
        input: shuffles[random]
      }
      await request(app).get(url).send(body)
        .expect(200)
        .then((res, err) => {
          console.log(res.body);

          if (err)
            throw err;
        });
    });
  });
}

asyncCall();