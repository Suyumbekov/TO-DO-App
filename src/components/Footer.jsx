import TaskFIlter from "./TaskFilter";

const Footer = ({ filter, counter, onChangeFilter, onDeleteComplete }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{counter} items left</span>
      <TaskFIlter
        filter={filter}
        onChangeFilter={onChangeFilter}
        onDeleteComplete={onDeleteComplete}
      />
      <button onClick={() => onDeleteComplete()} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
