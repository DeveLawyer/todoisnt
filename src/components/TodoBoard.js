import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import styles from "../styles/todo-board.module.scss";

const TodoBoard = ({ todos, onTodosChange, children }) => {
  const [displayForm, setDisplayForm] = React.useState(false);
  const [todoId, setTodoId] = React.useState(1);

  function handleTodoSubmit(event) {
    event.preventDefault();
    // TODO: extraer una fx createTodo a MainContainer
    const { actualTodo } = event.target.elements;

    const newTodo = {
      id: todoId,
      description: actualTodo.value,
      isCompleted: false,
    };

    onTodosChange([...todos, newTodo]);
    setTodoId(todoId + 1);
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Todos</h2>

      <TodoList>{children}</TodoList>

      <div>
        {displayForm ? (
          <Form
            btnName="Add"
            onHandleSubmit={handleTodoSubmit}
            onChangeDisplay={setDisplayForm}
          />
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
