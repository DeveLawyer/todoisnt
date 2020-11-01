import React from "react";
import styles from "../styles/form.module.scss";
import Button from "./Button";

const Form = ({
  todo,
  onHandleSubmit,
  onChangeDisplay,
  onDeleteChange,
  btnName,
}) => {
  function handleFormSubmit(event) {
    onHandleSubmit(event);
    onChangeDisplay(false);
  }

  function handleCancelClick() {
    onChangeDisplay(false);
  }

  // FIXME: refactor this with Context API. Now: MainContainer -> Todo -> Form
  function handleDeleteClick() {
    onDeleteChange(todo.id);
  }

  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleFormSubmit}
        autoComplete="off"
      >
        <div>
          <input
            className={styles.input}
            type="text"
            aria-label="todo input"
            placeholder="Write a todo..."
            id="actualTodo"
            required
          />
        </div>
        <div className={styles.actions}>
          <div className={styles.buttonsContainer}>
            <Button isPrimary={true} type="submit">
              {btnName}
            </Button>
            <Button isPrimary={false} type="button" onClick={handleCancelClick}>
              Cancel
            </Button>
          </div>
          {btnName === "Update" && (
            <div onClick={handleDeleteClick}>
              <i className="fas fa-trash-alt"></i>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
