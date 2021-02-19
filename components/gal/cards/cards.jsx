import { Title } from "components/titles";
import * as React from "react";
// @ts-ignore
import styles from "./cards.module.scss";

const PhotoList = [
  {
    img: "/fotosed/caminito2.jpg",
    description: "A short description",
    place: "Jardín Botánico Maracaibo",
    date: "12/08/2020",
  },
  {
    img: "/fotosed/ice-heart.jpg",
    description: "A short description",
    place: "Maracaibo, Venezuela",
    date: "19/02/2021",
  },
  {
    img: "/fotosed/pics-art.jpg",
    description: "A short description",
    place: "Jardín Botánico Maracaibo",
    date: "12/08/2020",
  },
  {
    img: "/fotosed/PINTEREST.jpg",
    description: "A short description",
    place: "Maracaibo, Venezuela",
    date: "24/12/2020",
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
