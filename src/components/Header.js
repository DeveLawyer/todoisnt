import React from "react";
import logo from "../images/logo.png";
import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.title}>Todoisnt</h1>

        <img src={logo} alt="logo" className={styles.logo} />
      </div>
    </header>
  );
};

export default Header;
