import * as React from "react";
// @ts-ignore
import styles from "./header.module.scss";
import { Nav } from "../header/nav";
import { Logo } from "./logo";
import { SocialMenu } from "./social-menu/social";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Nav />
        <Logo />
        <SocialMenu isHeader />
      </div>
    </header>
  );
};
