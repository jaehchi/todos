const { Router } = require('express');
const { createTodo, findAllTodos  } = require('./controllers/todosController');

const router = Router();

router
  .route('/createTodo')
  .post(createTodo);

router
  .route('/findAllTodos')
  .get(findAllTodos);

module.exports = router;