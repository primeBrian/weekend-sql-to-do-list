const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const router = require('./routes/todo.Router')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));// have above the router will be on code challenge
app.use(express.static('server/public'));

// app.get ('/todo', (req, res) => {
//  res.send('this is working');
// sql  statements
//})

// pool.query(queryText).then((results) => {
//  res.send(results.rows)
//}).catch((error) => {
// console.error(error)
// res.sendStatus(500);
//});
//});

//

// app.post('/todo', (req,res))
app.use('/todo', router)

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});