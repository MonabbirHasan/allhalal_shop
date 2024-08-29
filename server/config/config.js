/* eslint-disable no-undef */
const mysql = require("mysql2");
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "all_halal",
    connectionLimit: 1000, // Adjust according to your needs
};
const pool = mysql.createConnection(dbConfig);
module.exports = pool;