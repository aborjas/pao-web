import * as React from "react";
// @ts-ignore
import styles from "./div1.module.scss";

export const Div1 = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/pngs/flor.png" />
      <div className={styles.textContainer}>
        <p className={styles.text}>
          “LO IMPORTANTE ES VER AQUELLO QUE RESULTA INVISIBLE PARA LOS DEMÁS”
        </p>
        <p className={`${styles.text} ${styles.other}`}>-ROBERT FRANK</p>
      </div>
    </div>
  );
};
