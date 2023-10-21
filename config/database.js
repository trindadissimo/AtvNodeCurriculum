const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('uochlmqd', 'uochlmqd', '1ucgH9ULvSQljdoSwPMcei0Rel7aA7eB', {
  host: 'batyr.db.elephantsql.com',
  dialect: 'postgres',
  port: 5432,
});

module.exports = sequelize;
