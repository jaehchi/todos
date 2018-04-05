const Todo = require('../../db/models/todos');

const todosController = {
  createTodo : ( req, res ) => {
    const todo = new Todo({
      entry: req.body.entry,
      status: req.body.status
    });

    todo.save( ( err, todo ) => {
      if ( err ) {
        res.send(err);
      }
      res.status(201).send(todo);
    })
  },

    findAllTodos : ( req, res ) => {
    Todo.find().then( (result) => {
      res.status(201).send(result);
    })
    .catch( err => {
      res.send(err);
    })
  } 

}

module.exports = todosController;