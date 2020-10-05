import { Title } from "components/titles";
import * as React from "react";
// @ts-ignore
import styles from "./about.module.scss";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <Title title="Sobre mí" />
      <div className={styles.info}>
        <figure className={styles.imgBox}>
          <img className={styles.img} src="/fotos/pao.jpg" />
        </figure>
        <div className={styles.textContainer}>
          <p className={styles.aboutText}>
            Hola, soy Paola! Ingeniera de profesión y fotógrafa de corazón. Te
            preguntarás qué tiene que ver una cosa con la otra, y siendo sincera
            no tienen nada en común, digamos que estoy entre lo mejor de dos
            mundos...
          </p>
          <p className={styles.aboutText}>
            Vivo en Maracaibo, tengo 25 años y soy la esposa de mi enamorado de
            la universidad. Me encantan los perritos, los bebés, y el olor del
            café y de la lluvia.
          </p>
          <p className={styles.aboutText}>
            Mi amor por la fotografía empezó desde muy peque cuando mis papás me
            regalaron mi primera cámara, era de juguete pero hacía fotos de
            verdad, y fue el mejor regalo que he recibido. Con esa cámara hice
            mis primeras fotos (que eran un desastre), pero yo amaba fotografiar
            literalmente, cualquier cosa, desde personas distraídas en la calle,
            hasta a mis primas mientras jugábamos a ser mamás. Era una niña
            feliz capturando momentos random.
          </p>
          <p className={styles.aboutText}>
            Hace 6 meses decidí empezar a estudiar fotografía y cada día me
            enamoro más de ella, me gusta ver lo que nadie ve, y darme cuenta de
            la cantidad de emociones que se generan a través de una foto. Ahora
            estoy aplicando mis conocimientos, pero aún sigo aprendiendo. <br />
            Todavía no tengo una cámara y es por eso que todo lo que verás aquí
            será hecho con mi celular, pero como yo lo veo, no es la cámara
            quien hace la magia, sino el fotógrafo detrás del lente, así sea el
            lente de un celular{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
