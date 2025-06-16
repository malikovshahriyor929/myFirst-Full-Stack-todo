import todoService from "../service/todo.service.js";

class TodoController {
  async getAll(req, res) {
    try {
      const todo = await todoService.getAll();
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async create(req, res) {
    try {
      const todo = await todoService.create(req.body.text);
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async delete(req, res) {
    try {
      const id = req.params.id;
      const dele = await todoService.deleteFn(id);
      res.status(200).json(dele);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async edit(req, res) {
    try {
      const id = req.params.id;
      const edited = await todoService.edit(id, req.body.text);
      res.status(200).json(edited);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new TodoController();
