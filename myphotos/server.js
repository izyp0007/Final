// Express Setup
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))


// Knex Setup
const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];  
const db = require('knex')(config);


app.get('/api/photos', (req, res) => {
  db('photos').select().from('photos').then(photos => {
    res.send(photos);
  }).catch(error => {
    res.status(500).json({ error });
  });
});

app.post('/api/photos', (req, res) => {
  db('photos').insert({path:req.body.path, attribution: req.body.attribution, original: req.body.original, description: req.body.description }).then(photo => {
    res.status(200).json({id:photo[0]});
  }).catch(error => {
    console.log(error);
    res.status(500).json({ error });
  });
});


app.listen(3000, () => console.log('Server listening on port 3000!'))
