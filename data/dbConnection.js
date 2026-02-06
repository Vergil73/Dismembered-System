const { Pool } = require('pg');

// Initiating connection to the database

const  pool = new Pool({
    user: process.env.db_user,
    password: process.env.db_password,
    host: process.env.db_host,
    database: process.env.db_database,
    port: process.env.db_port
});

pool.connect()
    .then(() => console.log(" Connected to PostgreSQL"))
    .catch(err => console.error(" Database Connection error", err));

module.exports = { pool };