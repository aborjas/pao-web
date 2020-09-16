import * as React from "react";
// @ts-ignore
import styles from "./header.module.scss";
import { Nav } from "../header/nav";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Nav />
        <Logo />
      </div>
    </header>
  );
};
