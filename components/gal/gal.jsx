import { Title } from "components/titles";
import * as React from "react";
import { Card } from "./cards";
import { GalBtn } from "./gal-btn";
// @ts-ignore
import styles from "./gal.module.scss";

export const Gal = () => {
  return (
    <section className={styles.container}>
      <Title title="Galería" />
      <Card />
      <GalBtn />
    </section>
  );
};
