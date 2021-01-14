const mysql = require("mysql2");

// 1 connection - query - close connection

// 2 connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node_complete",
  //password: "an003722",
  password: "AN003722040592la",
});

module.exports = pool.promise();
