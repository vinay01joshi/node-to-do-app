const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


var password = '123abc!';

// bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(password,salt,(err,hash)=>{
//         console.log(hash);
//     })
// });

var hashedPasswrod = '$2a$10$CQplbdVxu3y7GqNoMQ4hcuYOPsstJRAGDj6VxD6wm3UqKL5t7Vzo2';

bcrypt.compare(password,hashedPasswrod,(err,res)=>{
    console.log(res);
});

// var data ={
//     id : 10
// };

// var token = jwt.sign(data ,'abc123');
// console.log('token',token);

//  var decoded = jwt.verify(token,'abc123');
//  console.log('decoded',decoded);

// var message = 'I am user number 3';

// var hash = SHA256(message).toString();
// console.log(`Message:${message}`);
// console.log(`Hash : ${hash}`);


