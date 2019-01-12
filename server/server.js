var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var express = require('express');
var bodyParser=require('body-parser');
const {ObjectID}= require('mongodb');


var app=express();
//
// var newTodo = new Todo({text:'cook dinner BOI'});
//
// newTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc));
// },(e)=>{
//   console.log('unable to save todo',e);
// });
//convert the receiving json into an object
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
  console.log(req.body);
  var todo = new Todo ({text:req.body.text});
  todo.save().then((doc)=>{
    console.log(doc);
    res.send(doc);
  },(e)=>{
    console.log(e);
    res.status(400).send(e);


  });
});

app.get('/todos',(req,res)=>{

  Todo.find().then( (todos) => {
    res.send({todos});
  }, (e)=>{
  res.status(400).send(e);
});

});

app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;
  var obj= new ObjectID (String(id));
  console.log(id);
  // res.send(id);
  if (!ObjectID.isValid(id)){
    return res.status(404).send('id not valid');
    // console.log('id not valid');
  }

    Todo.findById({_id : id}).then((todo)=>{
      if (!todo) {
        return res.status(404).send('todo not found');
        // console.log('todo not found');

      }
      res.send({todo});
      console.log('success');

    }).catch((e)=>{
      res.status(400).send();
      console.log('error');
    });





});



 app.listen(3000,()=>{
  console.log('started on port 3000');
});
