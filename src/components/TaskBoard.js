import React from "react";
import styles from "../styles/task-board.module.scss";

const TaskBoard = ({ children }) => {
  const [displayForm, setDisplayForm] = React.useState(false);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Todos</h2>

      <div>{children}</div>

      <div>
        {displayForm ? (
          <form>
            <div>
              <input
                type="text"
                aria-label="new todo"
                placeholder="Write a todo..."
              />
            </div>
            <div>
              <button>Ok</button>
              <button onClick={() => setDisplayForm(false)}>Cancel</button>
            </div>
          </form>
        ) : (
          <button
            className={styles.addBtn}
            onClick={() => setDisplayForm(true)}
          >
            <i class="fas fa-plus"></i> Add task
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
