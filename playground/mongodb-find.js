// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server.');

    // db.collection('Todos')
    // .find({completed : false})
    // .toArray()
    // .then((docs)=>{
    //      console.log('Todos');
    //      console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos')
    // });

    // db.collection('Todos')
    // .find({_id : new ObjectID('58b1947f979c5649107afccd')})
    // .toArray()
    // .then((docs)=>{
    //      console.log('Todos');
    //      console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos')
    // });

    // db.collection('Todos')
    // .find()
    // .count()
    // .then((count)=>{
    //      console.log(`Todos Count: ${count}`);        
    // },(err)=>{
    //     console.log('Unable to fetch todos')
    // });

    db.collection('Users')
    .find({name : 'Apoorv Joshi'})
    .toArray()
    .then((docs)=>{
         console.log('Todos');
         console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos')
    });


    // db.close();
});