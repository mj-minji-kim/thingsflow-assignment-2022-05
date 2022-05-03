const App = require('../app');
const port = 3000
const db = require('./model/index');

App.app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});

db.sequelize.sync();