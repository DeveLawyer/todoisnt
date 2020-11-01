import React from "react";
import styles from "../styles/button.module.scss";

const Button = ({ children, isPrimary, onClick = null }) => {
  // 'Cancel' button has an onClic; buttons type submit doesn't
  function handleClick() {
    if (!onClick) return;
    onClick();
  }

  return (
    // FIXME: How to solve 'Form submission canceled because the form is not
    // connected' warning
    // I'm always setting an onClick to a submit type button
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
