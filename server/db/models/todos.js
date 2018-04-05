const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  entry: String
});

const todo = mongoose.model('Todo', todoSchema);

module.exports = todo;