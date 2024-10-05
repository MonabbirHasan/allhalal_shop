/* eslint-disable no-undef */
const mysql = require("mysql2");
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "all_halal",
    connectionLimit: 10, // Adjust according to your needs
};
const pool = mysql.createPool(dbConfig);

// Handling connection errors
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    } else if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    } else if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    } else {
      console.log("database connected");
    }
  }
  if (connection) connection.release();
  return;
});

module.exports = pool;
