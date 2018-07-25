
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to database');
    }
    console.log('connected to mongodb server');

    client.db('TodoApp').collection('User').insertOne({ name: 'Mahesh', age: 28, location: 'mumbai' }, (err, result) => {
        if (err) {
            return console.log('unable to insert the collection', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));

    })

    client.close();
});