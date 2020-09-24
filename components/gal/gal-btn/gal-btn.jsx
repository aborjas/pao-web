import * as React from "react";
// @ts-ignore
import styles from "./gal-btn.module.scss";

export const GalBtn = () => {
  return (
    <div className={styles.container}>
      <a className={styles.btn} href="/galeria">
        Ver Todas
      </a>
    </div>
  );
};
