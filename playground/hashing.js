const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data ={
    id : 10
};

var token = jwt.sign(data ,'abc123');
console.log('token',token);

 var decoded = jwt.verify(token,'abc123');
 console.log('decoded',decoded);

// var message = 'I am user number 3';

// var hash = SHA256(message).toString();
// console.log(`Message:${message}`);
// console.log(`Hash : ${hash}`);