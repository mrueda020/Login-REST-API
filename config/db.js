const mysql = require("mysql");
const { promisify } = require("util");
const conn = mysql.createPool({
  connectionLimit: 10000,
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});
conn.query = promisify(conn.query);
module.exports = conn;
