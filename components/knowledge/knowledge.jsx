import { Title } from "components/titles";
import * as React from "react";
// @ts-ignore
import styles from "./knowledge.module.scss";

const knowList = [
  {
    name: "Workshop Online Smartphone Fotografía Móvil",
    place: "Norestudios",
    date: "Abril 2020",
  },
  {
    name: "Curso Online Smartphone Fotografía Móvil 2",
    place: "Norestudios",
    date: "Mayo 2020",
  },
  {
    name: "Maratón Internacional de Fotografía y Video",
    place: "Top 90 Online",
    date: "Mayo 2020",
  },
  /*{
    name: "Pictorialismo, Ponencia por Ángeles Mesa (España)",
    place: "Top 90 Online Maratón Internacional de Fotografía y Video",
    date: "Mayo 2020",
  },
  {
    name: "La narrativa del gesto, Ponencia por Paola Paz (Chile)",
    place: "Top 90 Online Maratón Internacional de Fotografía y Video",
    date: "Mayo 2020",
  },
  {
    name: "Escenarios Fantasía, Ponencia por Mika Balbuena (Argentina)",
    place: "Top 90 Online Maratón Internacional de Fotografía y Video",
    date: "Mayo 2020",
  },
  {
    name:
      "Estilo personal en Fotografía de Bodas, Ponencia por Donald Bohorquez",
    place: "Top 90 Online Maratón Internacional de Fotografía y Video",
    date: "Mayo 2020",
  },
  {
    name:
      "Fotografía documental de familia, Ponencia por Nacho Ibañez (España)",
    place: "Top 90 Online Maratón Internacional de Fotografía y Video",
    date: "Mayo 2020",
  },
  {
    name: "Retoque Avanzado, Ponencia por Hugo Flores (México)",
    place: "Top 90 Online Maratón Internacional de Fotografía y Video",
    date: "Mayo 2020",
  },
  {
    name: "Seguridad en una Sesión Newborn, Ponencia por Bea Pastor (España)",
    place: "Top 90 Online Maratón Internacional de Fotografía y Video",
    date: "Mayo 2020",
  },
  {
    name:
      "Rescatando Detalles y Creando Volumen, Ponencia por Emanuel Combin (Argentina)",
    place: "Top 90 Online Maratón Internacional de Fotografía y Video",
    date: "Mayo 2020",
  },
  {
    name:
      "Fotografía Editorial de Bodas, Ponencia por Laura Bruzual (Venezuela)",
    place: "Top 90 Online Maratón Internacional de Fotografía y Video",
    date: "Mayo 2020",
  },
  {
    name:
      " Imágenes significativas en una boda, Ponencia por Citlalli Rico (México)",
    place: "Top 90 Online Maratón Internacional de Fotografía y Video",
    date: "Mayo 2020",
  },
  {
    name: "Nombre de la capacitación",
    place: "Institución",
    date: "30/10/2020",
  },*/
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
