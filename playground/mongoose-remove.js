const {ObjectID}= require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');


// Todo.remove({}).then((result)=>{
//   console.log(result);
// });
var id = '5c37de4263ba281704a089ce';

// Todo.findByIdAndRemove(id).then((result)=>{
//   console.log(result);
// });
//
// Todo.findByOneAndRemove({_id: id}).then((result)=>{
//   console.log(result);
// });
