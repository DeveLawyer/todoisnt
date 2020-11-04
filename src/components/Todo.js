import React from "react";
import styles from "../styles/todo.module.scss";
import Form from "./Form";

const Todo = ({
  todo,
  onToggleChange,
  onDescriptionChange,
  onDeleteChange,
}) => {
  const [displayForm, setDisplayForm] = React.useState(false);

  function handleChange() {
    onToggleChange(todo.id);
  }

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
      {displayForm && !todo.isCompleted ? (
        <Form
          btnName="Update"
          onHandleSubmit={handleTodoSubmit}
          onChangeDisplay={setDisplayForm}
          todo={todo}
          onDeleteChange={onDeleteChange}
        />
      ) : (
        <li
          className={`${styles.listItem} ${todo.isCompleted && styles.isDone}`}
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
