import React from "react";
import styles from "../styles/todo.module.scss";

const Todo = ({ description }) => (
  <li className={styles.listItem}>
    <input type="checkbox" className={styles.checkbox} />
    <label>{description}</label>
  </li>
);

export default Todo;
