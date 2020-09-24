import { Title } from "components/titles";
import * as React from "react";
// @ts-ignore
import styles from "./cards.module.scss";

const PhotoList = [
  {
    img: "/fotos/arbol.jpg",
    description: "A short description",
    place: "Jardín Botánico Maracaibo",
    date: "12/08/2020",
  },
  {
    img: "/fotos/couple.jpg",
    description: "A short description",
    place: "Jardín Botánico Maracaibo",
    date: "12/08/2020",
  },
  {
    img: "/fotos/sky.jpg",
    description: "A short description",
    place: "Jardín Botánico Maracaibo",
    date: "12/08/2020",
  },
  {
    img: "/fotos/people.jpg",
    description: "A short description",
    place: "Jardín Botánico Maracaibo",
    date: "12/08/2020",
  },
];

export const Card = () => {
  return (
    <div className={styles.container}>
      {PhotoList.map((value) => (
        <div className={styles.cardContainer}>
          <figure className={styles.imgContainer}>
            <img src={value.img} className={styles.img} />
          </figure>
          <div className={styles.textContainer}>
            <h3 className={styles.place}>{value.place}</h3>

            <h5 className={styles.date}>{value.date}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
