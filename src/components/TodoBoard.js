import React from "react";
import Button from "./Button";
import TodoList from "./TodoList";
import styles from "../styles/todo-board.module.scss";

const TodoBoard = ({ todos, onTodosChange, children }) => {
  const [displayForm, setDisplayForm] = React.useState(false);
  const [todoId, setTodoId] = React.useState(1);
  const [inputText, setInputText] = React.useState("");

  function handleTodoSubmit(event) {
    event.preventDefault();
    const { todo } = event.target.elements;

    const newTodo = {
      id: todoId,
      description: todo.value,
      isCompleted: false,
    };

    onTodosChange([...todos, newTodo]);
    setTodoId(todoId + 1);
    setInputText("");
  }

  function handleOnInputChange(event) {
    setInputText(event.target.value);
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Todos</h2>

      <TodoList>{children}</TodoList>

      <div>
        {displayForm ? (
          <form
            className={styles.form}
            onSubmit={handleTodoSubmit}
            autoComplete="off"
          >
            <div>
              <input
                className={styles.input}
                type="text"
                aria-label="new todo input"
                placeholder="Write a todo..."
                id="todo"
                value={inputText}
                onChange={handleOnInputChange}
                required
              />
            </div>
            <div>
              <Button isPrimary={true} type="submit">
                Add
              </Button>
              <Button
                isPrimary={false}
                type="button"
                onClick={() => setDisplayForm(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <button
            className={styles.addBtn}
            onClick={() => setDisplayForm(true)}
          >
            <i className={`fas fa-plus ${styles.icon}`}></i>Add task
          </button>
        )}
      </div>
    </section>
  );
};

export default TodoBoard;
