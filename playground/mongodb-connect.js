// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server.');

    // db.collection('Todos').insertOne({
    //     text : 'Someting to do',
    //     completed : false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.collection('Users').insertOne({
        name : 'Vinay Joshi',
        age : 28,
        location : 'Gurgaon India'        
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert Users',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.close();
});