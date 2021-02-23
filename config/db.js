const mysql = require("mysql");
const { promisify } = require("util");
const conn = mysql.createPool({
  connectionLimit: 10000,
  host: "localhost",
  user: "root",
  password: "",
  database: "examen5",
});
conn.query = promisify(conn.query);
module.exports = conn;
