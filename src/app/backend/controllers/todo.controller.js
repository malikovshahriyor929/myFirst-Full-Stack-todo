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
}

export default new TodoController();
