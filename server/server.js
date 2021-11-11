const express = require('express');
const app = express();
// const cors = require('cors');
// app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.listen(5000, function () {
    console.log(`App running on port ${this.address().port}`);
});