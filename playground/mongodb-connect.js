// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
// object desctructuring
var user = {name:'kai',age:24};
var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect');
  }
  console.log('connected to mongoDB server');
  // db.collection('todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // },(err,result)=>{
  //   if (err) {
  //     return console.log('unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.collection('Users').insertOne({
    name: 'Kai-Ming',
    location: 'PR',
    age: 24
  },(err,result)=>{
    if (err) {
      return console.log('unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0].getTimestamp());
  });
  db.close();
});
