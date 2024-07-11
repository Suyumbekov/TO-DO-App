import TaskFIlter from "./TaskFilter";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TaskFIlter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
