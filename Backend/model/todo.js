const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todoname: { type: String, required: true },
  todoDate: { type: Date, required: true },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("todoTodo", todoSchema);
