import React from "react";
import styles from "../styles/todo.module.scss";

const Todo = ({ todo, onUpdateTodo }) => {
  function handleChange() {
    onUpdateTodo(todo.id);
  }

  return (
    <li
      className={`${styles.listItem} ${
        todo.isCompleted ? styles.isDone : null
      }`}
    >
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={handleChange}
        checked={todo.isCompleted}
      />

      <label>{todo.description}</label>
    </li>
  );
};

export default Todo;
