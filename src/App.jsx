import { useEffect, useState } from "react";

import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?userId=1"
        );
        const result = await response.json();
        const modifiedData = result.map((item) => ({
          ...item,
          editing: false,
          created: "created 5 minutes ago",
        }));
        setTasks(modifiedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const toggleEditing = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, editing: !task.editing } : task
      )
    );
  };

  const editTask = (id, val) => {
    setTasks(
      tasks.map((task) =>
        task.id == id
          ? { ...task, description: val, editing: !task.editing }
          : task
      )
    );
  };

  const addTask = (val) => {
    const newTask = {
      id: tasks.length + 1,
      title: val,
      completed: false,
      editing: false,
      created: "created just now",
    };
    setTasks([...tasks, newTask]);
  };

  const deleteComplete = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <>
      <TaskList
        tasks={tasks}
        onAdd={addTask}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggleEditing={toggleEditing}
        onDeleteComplete={deleteComplete}
      />
    </>
  );
}

export default App;
