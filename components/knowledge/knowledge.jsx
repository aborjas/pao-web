import { Title } from "components/titles";
import * as React from "react";
// @ts-ignore
import styles from "./knowledge.module.scss";

const knowList = [
  {
    name: "Nombre de la capacitación",
    place: "Institución",
    date: "30/10/2020",
  },
  {
    name: "Nombre de la capacitación",
    place: "Institución",
    date: "30/10/2020",
  },
  {
    name: "Nombre de la capacitación",
    place: "Plataforma",
    date: "30/10/2020",
  },
  {
    name: "Nombre de la capacitación",
    place: "Empresa",
    date: "30/10/2020",
  },
  {
    name: "Nombre de la capacitación",
    place: "Institución",
    date: "30/10/2020",
  },
];

export const Know = () => {
  return (
    <section className={styles.container} id="capacitaciones">
      <Title title="Capacitaciones" />
      <div className={styles.list}>
        {knowList.map((value) => (
          <div className={styles.cap}>
            <h3 className={styles.name}>{value.name}</h3>
            <h3 className={styles.place}>{value.place}</h3>
            <h3 className={styles.date}>{value.date}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
