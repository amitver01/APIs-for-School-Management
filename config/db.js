const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(process.env.DB_URL);

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

module.exports = db;
