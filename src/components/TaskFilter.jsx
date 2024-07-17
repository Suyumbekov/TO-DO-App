import PropTypes from "prop-types";

const TaskFilter = ({ filter, onChangeFilter }) => {
  return (
    <ul className="filters">
      <li>
        <button
          className={filter == "all" ? "selected" : ""}
          onClick={() => onChangeFilter("all")}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={filter == "active" ? "selected" : ""}
          onClick={() => onChangeFilter("active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={filter == "completed" ? "selected" : ""}
          onClick={() => onChangeFilter("completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

TaskFilter.propTypes = {
  filter: PropTypes.oneOf(["all", "active", "completed"]),
  onChangeFilter: PropTypes.func,
};

export default TaskFilter;
