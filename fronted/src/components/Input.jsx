import { useRef } from "react";
import style from "../style/input.module.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Input = () => {
  const todoname = useRef();
  const tododate = useRef();
  const dispatch = useDispatch();

  async function handleSubmit(event) {
    event.preventDefault();
    let name = todoname.current.value;
    let date = tododate.current.value;

    const res = await fetch("http://localhost:3002/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        date,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message); // ✅ backend message
    } else {
      toast.error(data.message); // ❌ error message
    }

    todoname.current.value = "";
    tododate.current.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Enter todo..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ref={todoname}
          />

          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ref={tododate}
          />

          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition active:scale-95">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Input;
