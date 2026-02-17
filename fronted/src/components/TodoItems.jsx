import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import style from "../style/Header.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const TodoItems = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:3002/api/");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        setTodo(data.todo);
        toast.success(data.message);
      } catch (err) {
        toast.error(err.message || "Something went wrong");
      }
    };

    fetchTodos();
  }, []);

  const handleDeleteFromUI = (id) => {
    setTodo((prev) => prev.filter((item) => item._id !== id));
  };

  const updateTodo = (updatedTodo) => {
    setTodo((prev) =>
      prev.map((item) => (item._id === updatedTodo._id ? updatedTodo : item)),
    );
  };
  return (
    <>
      {todo.length === 0 && (
        <h1 className="text-center text-gray-500 mt-10 text-xl">
          Nice to meet you 👋 Add your first todo
        </h1>
      )}

      <div className="max-w-3xl mx-auto mt-8 space-y-4 px-4">
        {todo.map((item) => (
          <TodoItem
            item={item}
            key={item._id}
            handleDeleteFromUI={handleDeleteFromUI}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
