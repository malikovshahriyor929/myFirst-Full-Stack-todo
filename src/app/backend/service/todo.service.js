import todoModel from "../models/todo.model";

class TodoService {
  async getAll() {
    const todo = await todoModel.find();
    return todo;
  }
}
module.exports = new TodoService();
