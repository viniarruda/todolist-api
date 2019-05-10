const TodoList = require('../models/TodoList');

class TodoListController {
  async show (req, res) {
    const todo = await TodoList.find({})

    res.json(todo)
  }
  async create (req, res) {

    const todo = await TodoList.create({
      title: req.body.title
    })

    res.json(todo)
  }
  async delete (req, res) {
    await TodoList.findOneAndDelete(req.body._id)
    
    res.json({
      status: 'ok',
      message: 'Delete Ok'
    })
  }
  async update (req, res) {
    await TodoList.findOneAndUpdate(req.body._id, {
      title: req.body.title,
      done: req.body.done
    })

    res.json({
      status: 'ok',
      message: 'Update Ok'
    })
  }
}

module.exports = new TodoListController();