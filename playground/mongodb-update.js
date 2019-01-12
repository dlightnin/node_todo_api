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

  db.collection('todos').findOneAndUpdate({
    _id: new ObjectID('5b7a6526977682ebf24816d9')
  },{
    $set:{
      completed:false
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(JSON.stringify(result));
  })
  // db.close();
});
