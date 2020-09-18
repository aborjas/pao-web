import * as React from "react";
// @ts-ignore
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <img className={styles.img} src="/fotos/camino.jpg" />
    </section>
  );
};
