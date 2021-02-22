import * as React from "react";
// @ts-ignore
import styles from "./popup.module.scss";

export const PopUp = ({ image, closeModal }) => {
  return (
    <div className={styles.container} id="popup">
      <div className={styles.content}>
        <img className={styles.img} src={image} alt="" />
        <div className={styles.btnContainer} onClick={() => closeModal()}>
          <div className={styles.btn1}></div>
          <div className={styles.btn2}></div>
        </div>
      </div>
    </div>
  );
};
