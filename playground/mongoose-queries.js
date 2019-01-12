const {ObjectID}= require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

var id = '5c368abd3f82c47906a82b201';
//mongoose converts id into objectid

if (!ObjectID.isValid(id)) {
  console.log('id is not valid');
}

Todo.find({_id : id}).then((todos)=>{
  console.log('Todos',todos);
});

Todo.findOne({_id : id}).then((todo)=>{
  console.log('Todos',todo);
});

Todo.findById({_id : id}).then((todo)=>{
  if (!todo) {
    return console.log('id not found');
  }
  console.log('Todos',todo);
}).catch( (e)=>
  console.log(e)
);
