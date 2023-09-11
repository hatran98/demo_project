const mysql = require("mysql2");

const pool = mysql.createPool({
  database: "demobanhang",
  user: "root",
  password: "",
  host: "localhost",
  port: "3306",
});

module.exports = pool.promise();
