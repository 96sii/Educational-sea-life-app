const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('sea_life');
    const animalsCollection = db.collection('animals');
    const questionsCollection = db.collection('questions');
    const animalsRouter = createRouter(animalsCollection);
    const questionsRouter = createRouter(questionsCollection);
    app.use('/api/animals', animalsRouter);
    app.use('/api/questions', questionsRouter);
  })
  .catch(console.err);

app.listen(5000, function () {
    console.log(`App running on port ${this.address().port}`);
});