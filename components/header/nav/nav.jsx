import * as React from "react";
//@ts-ignore
import styles from "./nav.module.scss";
import Link from "next/link";

export const Nav = () => {
  return (
    <Link href="#">
      <a className={styles.burguerMenu}>
        <img className={styles.icon} src="/pngs/menu.png" />
      </a>
    </Link>
  );
};
