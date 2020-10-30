import React from "react";
import styles from "../styles/button.module.scss";

const Button = ({ children, isPrimary, onClick = null }) => {
  function handleClick() {
    if (!onClick) return;
    onClick();
  }

  return (
    <button
      className={`${styles.btn} ${
        isPrimary ? styles.primaryBtn : styles.secondaryBtn
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
