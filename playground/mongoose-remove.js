const {ObjectID} =require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.fineOneAndRemove({})
// Todo.findByIdAndRemove()


Todo.findByIdAndRemove('58b2d9633f1798ee7b9b2df6').then((todo)=>{
    console.log(todo);
})