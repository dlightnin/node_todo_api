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

  //deleteMany
  // db.collection('todos').deleteMany({text:'Eat lunch'}).then((result)=>{
  //   console.log(JSON.stringify(result));
  // })
  //deleteOne
  // db.collection('todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  //   console.log(JSON.stringify(result));
  // })
  //findOneAndDelete: finds one, deletes, and brings back values
  db.collection('todos').findOneAndDelete({completed:false}).then((result)=>{
    console.log(JSON.stringify(result));
  })
  // db.close();
});
