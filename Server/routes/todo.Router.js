const express = require('express');
const router = express.Router();

const pool =  require('../modules/pool');

// from our GET function

router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "Todo_List";';
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('query:', queryText, 'Error', error);
        res.sendStatus(500);
    })
});


















module.exports = router;