import React from "react";
import TodoList from "./TodoList";
import styles from "../styles/done-board.module.scss";

const DoneBoard = ({ children }) => {
  return (
    <div className={styles.doneContainer}>
      <div className={styles.btnContainer}>
        <button className={styles.completedBtn}>Show completed</button>
      </div>
      <TodoList>{children}</TodoList>
    </div>
  );
};

export default DoneBoard;
