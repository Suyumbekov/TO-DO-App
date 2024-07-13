import { useState } from "react";

import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Completed task",
      completed: true,
      editing: false,
      created: "created 17 seconds ago",
    },
    {
      id: 2,
      description: "Editing task",
      completed: false,
      editing: true,
      created: "created 5 minutes ago",
    },
    {
      id: 3,
      description: "Active task",
      completed: false,
      editing: false,
      created: "created 5 minutes ago",
    },
  ]);

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

  return (
    <>
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggleEditing={toggleEditing}
      />
    </>
  );
}

export default App;
