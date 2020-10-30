import React from "react";
import styles from "../styles/task-board.module.scss";

const TaskBoard = ({ children }) => {
  const [displayForm, setDisplayForm] = React.useState(false);
  const [taskId, setTaskId] = React.useState(1);
  const [tasks, setTasks] = React.useState([]);

  function handleTaskSubmit(event) {
    event.preventDefault();
    const { todo } = event.target.elements;
    const newTask = {
      id: taskId,
      description: todo.value,
    };
    setTasks([...tasks, newTask]);
    setTaskId(taskId + 1);
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Todos</h2>

      <div>{children}</div>

      <div>
        {displayForm ? (
          <form onSubmit={handleTaskSubmit}>
            <div>
              <input
                type="text"
                aria-label="new todo"
                placeholder="Write a todo..."
                id="todo"
              />
            </div>
            <div>
              <button type="submit">Add</button>
              <button type="button" onClick={() => setDisplayForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            className={styles.addBtn}
            onClick={() => setDisplayForm(true)}
          >
            <i className="fas fa-plus"></i> Add task
          </button>
        )}
      </div>

      <div className={styles.completedContainer}>
        <button className={styles.completedBtn}>Show completed</button>
      </div>
    </section>
  );
};

export default TaskBoard;
