import NewTaskForm from "./NewTaskForm";
import Task from "./Task";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TaskList = ({
  tasks,
  onAdd,
  onToggleComplete,
  onDelete,
  onEdit,
  onToggleEditing,
  onDeleteComplete,
}) => {
  const [filter, setFilter] = useState("all");

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let c = 0;
    tasks.map((task) => {
      if (!task.completed) {
        c++;
      }
    });
    setCounter(c);
  }, [tasks]);

  const changeFilter = (val) => {
    setFilter(val);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
  });
  return (
    <section className="todoapp">
      <NewTaskForm onAdd={onAdd} />
      <section className="main">
        <ul className="todo-list">
          {filteredTasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              onAdd={onAdd}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
              onEdit={onEdit}
              onToggleEditing={onToggleEditing}
            />
          ))}
        </ul>
        <Footer
          filter={filter}
          counter={counter}
          onChangeFilter={changeFilter}
          onDeleteComplete={onDeleteComplete}
        />
      </section>
    </section>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onAdd: PropTypes.func,
  onToggleComplete: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onToggleEditing: PropTypes.func,
  onDeleteComplete: PropTypes.func,
};

TaskList.defaultProps = {
  tasks: [
    {
      id: 1,
      title: "Active task",
      completed: false,
      editing: false,
      created: Date.now(),
    },
    {
      id: 2,
      title: "Completed task",
      completed: true,
      editing: false,
      created: Date.now(),
    },
  ],
};

export default TaskList;
