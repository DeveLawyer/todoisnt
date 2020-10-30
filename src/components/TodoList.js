import React from "react";
import styles from "../styles/todo-list.module.scss";

const TodoList = ({ children }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

export default TodoList;
