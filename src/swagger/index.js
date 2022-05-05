const swaggerUi = require("swagger-ui-express")
const swaggereJsdoc = require("swagger-jsdoc")
// const api = require('')
const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "띵스플로우 서버 개발자 직무과제",
      description:
        "지원자: 김민지",
    },
    servers: [
      {
        url: "http://localhost:3000", // 요청 URL
      },
    ],
  },
  apis: ["./src/routes/*.js"], //Swagger 파일 연동
}
const specs = swaggereJsdoc(options)

module.exports = { swaggerUi, specs }