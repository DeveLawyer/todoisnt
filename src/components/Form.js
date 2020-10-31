import React from "react";
import styles from "../styles/form.module.scss";
import Button from "./Button";

const Form = ({ onHandleSubmit, onChangeDisplay, btnName }) => {
  function handleFormSubmit(event) {
    onHandleSubmit(event);
    onChangeDisplay(false);
  }

  function handleCancelClick() {
    onChangeDisplay(false);
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
            aria-label="new todo input"
            placeholder="Write a todo..."
            id="todo"
            required
          />
        </div>
        <div>
          <Button isPrimary={true} type="submit">
            {btnName}
          </Button>
          <Button isPrimary={false} type="button" onClick={handleCancelClick}>
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
