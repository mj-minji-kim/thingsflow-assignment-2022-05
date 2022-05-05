const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbot');

/**
 * @swagger
 *
 * /:
 *  post:
 *    summary: "요청에 대한 챗봇의 응답"
 *    description: "요청에 대한 챗봇의 응답. 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다. "
 *    tags: [ChatBot]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              input:
 *                type: string
 *                description: 오늘의 운세 조회를 위한 값 - "오늘의 운세" 혹은 카드 번호(integer. tarots의 값 중 한 개)
 *    responses:
 *      "200":
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  description : 요청에 대한 응답 메세지
 *                  example : 안녕하세요. 오늘의 운세를 위한 타로카드를 선택해보세요.
 *                tarots:
 *                  description : 선택할 수 있는 타로 카드 셔플
 *                  type: object
 *                  example: [1,3,2]
 *                tarot:
 *                  description : 유저가 선택한 타로카드에 대한 해석
 *                  type: object
 *                  example: { id: 1, name: 'The Star : 별 카드.', description: '점술가의 상징인 카드다. ',image: { type: 'Buffer', data: [Array] }, createdAt: '2022-05-03T14:29:51.779Z', updatedAt: '2022-05-03T14:29:51.779Z'}
 *              required: 
 *                  - msg

 */
router.get('/', chatbotController.reactChat);

module.exports = router;