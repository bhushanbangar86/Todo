import { useDispatch } from "react-redux";
import style from "../style/input.module.css";
import { todoActions } from "../store/todoslice";
import { toast } from "react-toastify";

const TodoItem = ({ item, handleDeleteFromUI, updateTodo }) => {
  const dispatch = useDispatch();

  async function handleDelete() {
    const res = await fetch(`http://localhost:3002/api/delete/${item._id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (res.ok) {
      toast.success(data.message);
      handleDeleteFromUI(item._id);
    } else {
      toast.success(data.message);
    }
    // optional redux update
    // dispatch(todoActions.deleteTodo(item._id));
  }

  async function handleComplete() {
    const res = await fetch(`http://localhost:3002/api/update/${item._id}`, {
      method: "PUT",
    });

    const data = await res.json();
    if (res.ok) {
      toast.success(data.message);
      updateTodo(data.todo);
    } else {
      toast.error(data.message);
    }
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div
        className={`text-lg font-medium ${
          item.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {item.todoname}
      </div>

      <div className="text-sm text-gray-500">
        {new Date(item.todoDate).toLocaleDateString("en-GB")}
      </div>

      {!item.completed ? (
        <button
          onClick={handleComplete}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Mark as completed
        </button>
      ) : (
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default TodoItem;
