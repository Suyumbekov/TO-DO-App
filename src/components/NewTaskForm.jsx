import { useState } from "react";

import PropTypes from "prop-types";

const NewTaskForm = ({ onAdd }) => {
  const [newTask, setNewTask] = useState("");

  const handleAdd = (e) => {
    if (e.key === "Enter") {
      onAdd(newTask);
      setNewTask("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        onKeyDown={handleAdd}
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
};

NewTaskForm.propTypes = {
  onAdd: PropTypes.func,
};

export default NewTaskForm;
