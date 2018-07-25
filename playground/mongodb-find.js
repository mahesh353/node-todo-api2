

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongo server', err);
    }
    console.log('connected to mongodb server');

    client.db('TodoApp').collection('Todos').find({ completed: false }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch the docs');
    });
    //client.close();

})