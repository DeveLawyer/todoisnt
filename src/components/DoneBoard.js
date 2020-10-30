import React from "react";
import styles from "../styles/done-board.module.scss";

const DoneBoard = () => {
  return (
    <div className={styles.completedContainer}>
      <button className={styles.completedBtn}>Show completed</button>
      <div>Cosas para ocultar</div>
    </div>
  );
};

export default DoneBoard;
