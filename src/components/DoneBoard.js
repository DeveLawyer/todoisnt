import React from "react";
import TodoList from "./TodoList";
import styles from "../styles/done-board.module.scss";

const DoneBoard = ({ children }) => {
  const [hidden, setHidden] = React.useState(true);

  return (
    <div className={styles.doneContainer}>
      <div className={styles.btnContainer}>
        <button
          className={styles.completedBtn}
          onClick={() => setHidden(!hidden)}
        >
          {hidden ? "Show completed" : "Hide completed"}
        </button>
      </div>
      <div className={hidden ? styles.hiddenContainer : null}>
        <TodoList>{children}</TodoList>
      </div>
    </div>
  );
};

export default DoneBoard;
