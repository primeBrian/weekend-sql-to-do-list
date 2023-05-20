const pg = require('pg');

const pool = new pg.Pool({
    database: 'Todo_List',
    host: 'localhost',
    port: 5432
});

module.exports = pool;