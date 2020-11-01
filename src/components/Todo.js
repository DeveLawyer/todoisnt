import React from "react";
import styles from "../styles/todo.module.scss";
import Form from "./Form";

const Todo = ({ todo, onToggleChange, onTodosChange, onDescriptionChange }) => {
  // FIXME: estoy duplicando este state
  const [displayForm, setDisplayForm] = React.useState(false);

  function handleChange() {
    onToggleChange(todo.id);
  }

  // FIXME: estoy duplicando esta fx
  function handleClick() {
    setDisplayForm(true);
  }

  function handleTodoSubmit(event) {
    event.preventDefault();
    const { actualTodo } = event.target.elements;

    onDescriptionChange(todo.id, actualTodo.value);
  }

  return (
    <>
      {displayForm ? (
        <Form
          btnName="Update"
          onHandleSubmit={handleTodoSubmit}
          onChangeDisplay={setDisplayForm}
        />
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
