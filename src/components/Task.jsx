import { useState } from "react";
import { formatDistanceToNow } from "date-fns";

import PropTypes from "prop-types";

const Task = ({
  task,
  onToggleComplete,
  onDelete,
  onEdit,
  onToggleEditing,
}) => {
  const [description, setDescription] = useState(task.title);

  const toggleHandler = () => {
    onToggleComplete(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = (e) => {
    if (e.key === "Enter") {
      onEdit(task.id, description);
    }
  };

  const toggleEditing = () => {
    onToggleEditing(task.id);
  };
  return (
    <li
      className={task.completed ? "completed" : task.editing ? "editing" : ""}
    >
      <div className="view">
        <input
          className="toggle"
          onChange={toggleHandler}
          type="checkbox"
          checked={task.completed}
        />
        <label>
          <span className="description">{task.title}</span>
          <span className="created">
            {formatDistanceToNow(task.created, { includeSeconds: true })}
          </span>
        </label>
        <button className="icon icon-edit" onClick={toggleEditing}></button>
        <button className="icon icon-destroy" onClick={handleDelete}></button>
      </div>
      {task.editing && (
        <input
          type="text"
          className="edit"
          onKeyDown={handleEdit}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      )}
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  onToggleComplete: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onToggleEditing: PropTypes.func,
};

export default Task;
