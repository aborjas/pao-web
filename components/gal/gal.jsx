import { Title } from "components/titles";
import * as React from "react";
// @ts-ignore
import styles from "./gal.module.scss";

export const Gal = () => {
  return (
    <section className={styles.container}>
      <Title title="Galería" />
      <div className={styles.cardsContainer}></div>
    </section>
  );
};
