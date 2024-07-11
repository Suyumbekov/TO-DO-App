const Task = ({ task }) => {
  return (
    <li
      className={task.completed ? "completed" : task.editing ? "editing" : ""}
    >
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{task.description}</span>
          <span className="created">{task.created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {task.editing && (
        <input type="text" className="edit" value="Editing task" />
      )}
    </li>
  );
};

export default Task;
