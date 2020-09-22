import * as React from "react";
// @ts-ignore
import styles from "./title.module.scss";

export const Title = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <p className={styles.text}>{title}</p>
    </div>
  );
};
