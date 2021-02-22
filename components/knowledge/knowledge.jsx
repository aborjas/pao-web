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
  /*{
    name: "Maratón Internacional de Fotografía y Video",
    place: "Top 90 Online",
    date: "Mayo 2020",
  },*/
];

const marathonList = [
  {
    name:"Rescatando Detalles y Creando Volumen",
    place: "Argentina",
    teacher: "Ponencia por Emanuel Combin",
  },
  {
    name: "Estilo personal en Fotografía de Bodas",
    place: "",
    teacher: "Ponencia por Donald Bohorquez",
  },
  {
    name: "Fotografía documental de familia",
    place: "España",
    teacher: "Ponencia por Nacho Ibañez",
  },
  {
    name: "Seguridad en una Sesión Newborn",
    place: "España",
    teacher: "Ponencia por Bea Pastor",
  },
  {
    name:"Fotografía Editorial de Bodas",
    place: "Venezuela",
    teacher: "Ponencia por Laura Bruzual",
  },
  {
    name:"Imágenes significativas en una boda",
    place: "México",
    teacher: "Ponencia por Citlalli Rico",
  },
  { name: "Pictorialismo",
    place: "España",
    teacher: "Ponencia por Ángeles Mesa",
  },
  {
    name: "La narrativa del gesto",
    place: "Chile",
    teacher: "Ponencia por Paola Paz",
  },
  {
    name: "Retoque Avanzado",
    place: "México",
    teacher: "Ponencia por Hugo Flores",
  },
  {
    name: "Escenarios Fantasía",
    place: "Argentina",
    teacher: "Ponencia por Mika Balbuena",
  },
];
  

export class Know extends React.Component {

  state = {
    isOpen: false,
  };

  render() {
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
        <div className={styles.cap}>
          <h3 className={styles.name}>Maratón Internacional de Fotografía y Video</h3>
          <h3 className={styles.place}>Top 90 Online</h3>
          <h3 className={styles.date}>Mayo 2020</h3>

          <a className={styles.seeMore}
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}>{this.state.isOpen ? 'Menos↑' : 'Mas↓'}</a>
          {this.state.isOpen && (
marathonList.map((value) => (
  <div className={styles.extendCap}>
    <h3 className={styles.extendName}>{value.name}</h3>
    <h3 className={styles.teacher}>{value.teacher}</h3>
    <h3 className={styles.extendPlace}>{value.place}</h3>
  </div>
))
          )}
          {}
        </div>
      </div>
    </section>
  );
};
}
