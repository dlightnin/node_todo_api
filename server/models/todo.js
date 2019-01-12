var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text: {
    type:String,
    required:true,
    minLength:1,
    trim: true//trims beginning and ending white spaces in strings
  },
  completed:{
    type:Boolean,
    default: false
  },
  completedAt:{
    type:Number,
    default: null
  }
});

module.exports = {Todo};
