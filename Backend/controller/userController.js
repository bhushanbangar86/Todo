const todoTodo = require("../model/todo");
const mongoose = require("mongoose");
exports.getTodo = async (req, res, next) => {
  try {
    const todo = await todoTodo.find().sort({ todoDate: 1 });

    res.status(200).json({
      message: "todo fetch successfully",
      todo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "failed to fetch todos",
      err,
    });
  }
};

exports.addTodo = async (req, res, next) => {
  try {
    const { name, date } = req.body;
    console.log(name, date);

    if (!name) {
      return res.status(400).json({ message: "name is required" });
    }

    if (!date) {
      return res.status(400).json({ message: "date is required" });
    }

    const newTodo = new todoTodo({ todoname: name, todoDate: date });
    const saveDoc = await newTodo.save();

    console.log("SAVED DOC:", saveDoc);

    res.status(200).json({
      message: "todo save successfully",
      todo: newTodo,
    });
  } catch (err) {
    res.status(500).json({ message: "server error occur", err });
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }

    const deleteTodo = await todoTodo.findByIdAndDelete(id);

    if (!deleteTodo) {
      res.status(404).json({ message: "todo not found" });
    }

    res.status(200).json({
      message: "todo deleted successfully",
      todo: deleteTodo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "failed to delete todo",
      err,
    });
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedTodo = await todoTodo.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true },
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({
      message: "Todo marked as completed",
      todo: updatedTodo,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update failed", err });
  }
};
