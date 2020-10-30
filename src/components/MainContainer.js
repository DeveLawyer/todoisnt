import React from "react";
import styles from "../styles/main-container.module.scss";
import TodoBoard from "./TodoBoard";
import DoneBoard from "./DoneBoard";

const MainContainer = () => {
  const [todos, setTodos] = React.useState([]);

  function onTodosChange(todos) {
    setTodos(todos);
  }

  return (
    <main className={styles.container}>
      <TodoBoard todos={todos} onTodosChange={onTodosChange}></TodoBoard>
      <DoneBoard></DoneBoard>
    </main>
  );
};

export default MainContainer;
