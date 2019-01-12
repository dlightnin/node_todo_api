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

  db.collection('todos').find({completed:false}).toArray().then((docs)=>{
    console.log('Todos:');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('unable to fetch todos',err);
  });

  db.collection('todos').find().count().then((count)=>{
    console.log('Todos count:', count);
  },(err)=>{
    console.log('unable to fetch todos',err);
  });
  // db.close();
});
