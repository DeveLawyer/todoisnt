import React from "react";
import styles from "../styles/todo.module.scss";
import Form from "./Form";

const Todo = ({ todo, onToggleChange }) => {
  const [displayForm, setDisplayForm] = React.useState(false);

  function handleChange() {
    onToggleChange(todo.id);
  }

  function handleClick() {
    setDisplayForm(true);
  }

  return (
    <>
      {displayForm ? (
        <Form btnName="Update" />
      ) : (
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

          <label className={styles.label} onClick={handleClick}>
            {todo.description}
          </label>
        </li>
      )}
    </>
  );
};

export default Todo;
