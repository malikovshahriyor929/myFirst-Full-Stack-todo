import todoModel from "../models/todo.model.js";

class TodoService {
  async getAll() {
    const todo = await todoModel.find();
    return todo;
  }
  async create(text) {
    const todo = await todoModel.create({ text });
    return todo;
  }
}
export default new TodoService();
