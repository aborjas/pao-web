import * as React from "react";
// @ts-ignore
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <figure className={styles.imgContainer}>
        {/* <img className={styles.img} src="/fotos/hongo.jpg" /> */}
        <img
          className={styles.img}
          src="/fotosed/hongo.jpg"
          alt="Hongo del Jardín Botánico Maracaibo"
        ></img>
      </figure>
    </section>
  );
};
/*  className={styles.img}
          srcset="/fotos/hongo-2560w.jpg 2560w,
             /fotos/hongo-600w.jpg 600w"
          sizes="(max-width: 600px) 600px,
          	2560px"
          src="/fotos/hongo-2560w.jpg"
          alt="Hongo del Jardín Botánico Maracaibo"*/
