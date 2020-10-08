import { SocialMenu } from "components/header/social-menu";
import * as React from "react";
// @ts-ignore
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <img className={styles.img} src="/pngs/pg.png" />
      <SocialMenu />
      <p className={styles.text}>
        ALL RIGHTS RESERVED PAOLA GARCÍA FOTOGRAFÍA 2020 | DESIGNED AND
        DEVELOPED BY ADRIANA BORJAS
      </p>
    </footer>
  );
};
