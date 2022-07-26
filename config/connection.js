require('dotenv').config();

const Sequelize = require('sequelize');  //this is good

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });


//     // Create a connection object
// const sequelize = new Sequelize(  //creates a new instance of sequelize class object// the const name is a "steve"
// // Database name
// 'library_db',
// // User
// 'root',
// // Password
// 'myPassword',
// {
//   // Database location  //options object telling where the db lives
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306
// }
// );
module.exports = sequelize;
