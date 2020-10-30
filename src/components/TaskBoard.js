import React from "react";
import styles from "../styles/task-board.module.scss";

const TaskBoard = ({ children }) => {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Todos</h2>

      <div>{children}</div>

      <div>
        <button className={styles.addBtn}>
          <i class="fas fa-plus"></i> Add task
        </button>
      </div>

      <div className={styles.completedContainer}>
        <button className={styles.completedBtn}>Show completed</button>
      </div>
    </main>
  );
};

export default TaskBoard;
