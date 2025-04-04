import React, { useState, useEffect } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (input.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  const handleEditTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 transition-all duration-300">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-4 drop-shadow">
            📝 My To-Do List
          </h1>
          <p className="text-gray-600 italic">
            “Small steps every day lead to big results.” 🚀
          </p>
        </div>

        {/* Input section */}
        <div className="mb-8 flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition font-semibold"
          >
            Add
          </button>
        </div>

        {/* Tasks section */}
        {tasks.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-5863383-4896414.png"
              alt="No Tasks"
              className="w-60 mx-auto mb-6"
            />
            <p className="text-lg font-medium">No tasks yet! Start by adding one above ✨</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="bg-blue-50 p-4 rounded-xl shadow-sm flex justify-between items-center hover:shadow-md transition-all"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.id)}
                  className="mr-4 accent-blue-600 scale-125"
                />
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) => handleEditTask(task.id, e.target.value)}
                  className={`flex-1 mr-4 p-2 bg-transparent border-b border-gray-300 focus:border-blue-400 focus:outline-none ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                />
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
