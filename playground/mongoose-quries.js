const {ObjectID} =require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');

var id = '58b281c7ca82e63fd05b218a';

if(!ObjectID.isValid(id)){
    console.log('Id is not valid!');
}
    
Todo.find({
    _id : id
}).then((todos)=>{
    console.log('Todos',todos);
});


Todo.findOne({
      _id : id
}).then((todo)=>{
    console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Id not found!');
    }
    console.log('Todo by Id',todo);
}).catch((e)=>{console.log(e)});