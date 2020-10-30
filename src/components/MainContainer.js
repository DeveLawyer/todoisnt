import React from "react";
import styles from "../styles/main-container.module.scss";

const MainContainer = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default MainContainer;
