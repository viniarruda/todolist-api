const express = require('express');

const routes = express.Router();

const TodoListController = require('./controllers/TodoListController');

routes.get('/todolist', TodoListController.show);
routes.post('/todolist', TodoListController.create);
routes.put('/todolist', TodoListController.update);
routes.delete('/todolist', TodoListController.delete);

module.exports = routes;