const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const express = require('express');
const bodyParser=require('body-parser');
const {ObjectID}= require('mongodb');
const _ = require('lodash');


var app=express();
const port = process.env.PORT || 3000;
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

app.delete('/todos/:id',(req,res)=>{
  var id = req.params.id;
  var obj= new ObjectID (String(id));
  console.log(id);
  // res.send(id);
  if (!ObjectID.isValid(id)){
    return res.status(404).send('id not valid');
    // console.log('id not valid');
  }

    Todo.findByIdAndRemove(id).then((todo)=>{
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

app.patch('/todos/:id',(req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body, ['text','completed']);
  if (!ObjectID.isValid(id)){
    return res.status(404).send('id not valid');
    // console.log('id not valid');
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  }else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
    if (!todo) {
      res.status(404).send();
    }
    console.log(body);
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  })
});

 app.listen(port,()=>{
  console.log(`started on port ${port}`);
});
