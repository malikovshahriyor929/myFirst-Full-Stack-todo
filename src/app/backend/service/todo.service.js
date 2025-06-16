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
  async deleteFn(id) {
    const todoDelete = await todoModel.findByIdAndDelete(id);
    return todoDelete;
  }
}
export default new TodoService();
