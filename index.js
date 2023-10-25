const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://lakumkeval:keval@cluster0.bihsz27.mongodb.net/?retryWrites=true&w=majority')
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

const port = 8080;

app.use(express.Router().get('/', (req, res) => {res.send('<h1>Hotel Booking System</h1>');}));
app.use(express.Router().get('/api', (req, res) => {res.send('<h1>API System</h1>');}));
app.use('/api', require('./routes/users'));
app.use('/api', require('./routes/hotels'));

app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});


app.listen(port, () => {
    console.log(`Now listening for requests on port: ` + port)
});