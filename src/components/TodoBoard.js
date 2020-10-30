import React from "react";
import styles from "../styles/todo-board.module.scss";

const TodoBoard = ({ todos, onTodosChange, children }) => {
  const [displayForm, setDisplayForm] = React.useState(false);
  const [todoId, setTodoId] = React.useState(1);

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
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Todos</h2>

      <div>{children}</div>

      <div>
        {displayForm ? (
          <form onSubmit={handleTodoSubmit}>
            <div>
              <input
                type="text"
                aria-label="new todo form"
                placeholder="Write a todo..."
                id="todo"
              />
            </div>
            <div>
              <button type="submit">Add</button>
              <button type="button" onClick={() => setDisplayForm(false)}>
                Cancel
              </button>
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
