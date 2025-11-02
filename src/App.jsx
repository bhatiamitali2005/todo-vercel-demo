import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    // Load from localStorage once (on app start)
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = { text: task, done: false };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    );
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p style={{ color: "#999", marginTop: "20px" }}>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((t, i) => (
            <li key={i} className={t.done ? "done" : ""}>
              <span onClick={() => toggleTask(i)}>{t.text}</span>
              <button onClick={() => deleteTask(i)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
