const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todoList');

const db = mongoose.connection;

db.on('error', () => {
  console.log(' Database did not connect!');
});

db.once('open', () => {
  console.log('Database has been established successfully');
})

module.exports = db;