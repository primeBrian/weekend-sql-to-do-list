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

// from our POST function

router.post('/', (req, res) => {
    let newTask = req.body;
    console.log('req.body:', req.body);
// parameterized query:
    let queryText = `
    INSERT INTO "Todo_List" ("task", "location")
    VALUES ($1, $2);
    `;
    
// these values are substituted for $1, $2, $3
    let values = [newTask.task, newTask.location];

// pass queryText and array of values
    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Query:', queryText, 'Error:', error);
            res.sendStatus(500);
        })
});

router.put('/:id', (req, res) => {
    let idToUpdate = req.params.id;
    
    queryText = `UPDATE "Todo_List" SET "complete" = TRUE WHERE "id"=$1`;
  
    pool.query(queryText, [idToUpdate])
    .then(result => {
        console.log('Task updated', result.rows);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error making update query', error);
        res.sendStatus(500);
    })
  })

  router.delete('/:id', (req, res) => {
    let taskToDelete = req.params.id;
    let queryText = 'DELETE FROM "Todo_List" WHERE "id"=$1';
    pool.query(queryText, [taskToDelete])
    .then(result => {
        console.log('In router side of delete. Task to delete:', result.rows);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error making delete:', error);
        res.sendStatus(500);
    })
})


module.exports = router;