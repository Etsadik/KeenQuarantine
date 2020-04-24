const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../database/mongo/controller.js');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/runs', (req, res) => {
//   controller.getRuns(req, res)
// })
app.get('/neighbors', (req, res) => {
  console.log('in get')
  controller.getNeighbors(req, res)
})

// app.post('/runs', (req, res) => {
//   controller.postRun(req, res)
// })

app.post('/neighbors', (req, res) => {
  controller.postNeighbor(req, res)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});