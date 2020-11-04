import React from "react";
import styles from "../styles/button.module.scss";

const Button = ({ children, isPrimary, onClick = null }) => {
  // 'Cancel' button has an onClick; buttons type submit doesn't
  function handleClick() {
    if (!onClick) return;
    onClick();
  }

  return (
    <button
      className={`${styles.btn} ${
        isPrimary ? styles.primaryBtn : styles.secondaryBtn
      }`}
      type={isPrimary ? "submit" : "button"}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
