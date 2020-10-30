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

  // Updates isCompleted property
  function updateTodos(todo) {
    setTodos([...todos]);
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.todosContainer}>
        <TodoBoard todos={todos} onTodosChange={onTodosChange}>
          {todos
            .filter((filteredTodo) => !filteredTodo.isCompleted)
            .map((todo) => (
              <Todo key={todo.id} todo={todo} onUpdateTodo={updateTodos} />
            ))}
        </TodoBoard>

        <DoneBoard>
          {todos
            .filter((filteredTodo) => filteredTodo.isCompleted)
            .map((todo) => (
              <Todo key={todo.id} todo={todo} onUpdateTodo={updateTodos} />
            ))}
        </DoneBoard>
      </div>
    </main>
  );
};

export default MainContainer;
