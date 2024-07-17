import TaskFilter from "./TaskFilter";

import PropTypes from "prop-types";

const Footer = ({ filter, counter, onChangeFilter, onDeleteComplete }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{counter} items left</span>
      <TaskFilter
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

Footer.propTypes = {
  filter: PropTypes.oneOf(["all", "active", "completed"]),
  counter: PropTypes.number,
  onChangeFilter: PropTypes.func,
  onDeleteComplete: PropTypes.func,
};

export default Footer;
