import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  const tasks = [
    {
      description: "Completed task",
      completed: true,
      editing: false,
      created: "created 17 seconds ago",
    },
    {
      description: "Editing task",
      completed: false,
      editing: true,
      created: "created 5 minutes ago",
    },
    {
      description: "Active task",
      completed: false,
      editing: false,
      created: "created 5 minutes ago",
    },
  ];
  return (
    <>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
