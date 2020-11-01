import React from "react";
import styles from "../styles/main-container.module.scss";
import TodoBoard from "./TodoBoard";
import DoneBoard from "./DoneBoard";
import Todo from "./Todo";

const MainContainer = () => {
  const [todos, setTodos] = React.useState([]);

  function onTodosChange(todos) {
    setTodos(todos);
  }

  // Updates todo.isCompleted property and todos state
  function toggleTodo(id) {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        const updatedTodo = {
          ...todo,
          isCompleted: !todo.isCompleted,
        };

        return updatedTodo;
      }

      return todo;
    });

    setTodos(newTodos);
  }

  // Updates todo.description property and todos state
  function updateTodo(id, newDescription) {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        const updatedTodo = {
          ...todo,
          description: newDescription,
        };

        return updatedTodo;
      }

      return todo;
    });

    setTodos(newTodos);
  }

  function displayTodos(status) {
    return todos
      .filter((filteredTodo) =>
        status === "done" ? filteredTodo.isCompleted : !filteredTodo.isCompleted
      )
      .map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggleChange={toggleTodo}
          onTodosChange={onTodosChange}
          onDescriptionChange={updateTodo}
        />
      ));
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.todosContainer}>
        <TodoBoard todos={todos} onTodosChange={onTodosChange}>
          {displayTodos("todo")}
        </TodoBoard>

        <DoneBoard>{displayTodos("done")}</DoneBoard>
      </div>
    </main>
  );
};

export default MainContainer;
