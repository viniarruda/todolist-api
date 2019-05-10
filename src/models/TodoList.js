const mongoose = require('mongoose');

const TodoList = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  }
},{
  timestamps: true
})

module.exports = mongoose.model('TodoList', TodoList);