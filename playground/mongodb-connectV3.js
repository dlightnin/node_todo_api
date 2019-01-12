const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('unable to connect');
  }
  console.log('connected to mongoDB server');
  const db = client.db('TodoApp');
  db.collection('todos').insertOne({
    text: 'something to do',
    completed: false
  },(err,result)=>{
    if (err) {
      return console.log('unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});
