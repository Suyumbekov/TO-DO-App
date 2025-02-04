import NewTaskForm from "./NewTaskForm";
import Task from "./Task";
import Footer from "./Footer";

const TaskList = ({ tasks }) => {
  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </ul>
        <Footer />
      </section>
    </section>
  );
};

export default TaskList;
