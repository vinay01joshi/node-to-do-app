// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server.');
    
    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('58b1aaae3f1798ee7b9b18c7')
    },{
        $set : {
            completed : true
        }
    },{
        returnOriginal : false
    }).then((result)=>{
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID("58b1a5303f1798ee7b9b1794")
    },{
        $set : {
            name : 'Tanuja Dhyani'
        },
        $inc : {
            age : 1
        }
    },{
        returnOriginal : false
    }).then((result)=>{
        console.log(result);
    });

    //db.close();
});