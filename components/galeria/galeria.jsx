import * as React from "react";
// @ts-ignore
import styles from "./galeria.module.scss";
import Link from "next/link";
import { PopUp } from "components/popup";

const photoList = [
  {
    src: "/fotosed/big-matica.jpg",
    alt: "Árbol",
    class: "styles.item1",
    id: "",
  },
  {
    src: "/fotosed/bolita.jpg",
    alt: "Luz",
    class: "styles.item2",
    id: "",
  },
  {
    src: "/fotosed/cactus.png",
    alt: "Cactus",
    class: "styles.item3",
    id: "",
  },
  {
    src: "/fotosed/caminito.jpg",
    alt: "Camino en el Jardín Botánico, Maracaibo",
    class: "styles.item4",
    id: "",
  },
  {
    src: "/fotosed/caminito2.jpg",
    alt: "Camino de árboles",
    class: "styles.item5",
    id: "",
  },
  {
    src: "/fotosed/camino.jpg",
    alt: "Árboles del Jardín Botánico, Maracaibo",
    class: "styles.item6",
    id: "",
  },
  {
    src: "/fotosed/cielo.jpg",
    alt: "Cielo",
    class: "styles.item7",
    id: "",
  },
  {
    src: "/fotosed/hongo.jpg",
    alt: "Hongo",
    class: "styles.item8",
    id: "",
  },
  {
    src: "/fotosed/ice-heart.jpg",
    alt: "Corazón iluminado",
    class: "styles.item9",
    id: "",
  },
  {
    src: "/fotosed/Pics-art.jpg",
    alt: "Foto enmarcada",
    class: "styles.item10",
    id: "",
  },
  {
    src: "/fotosed/PINTEREST.jpg",
    alt: "Piñas navideñas",
    class: "styles.item11",
    id: "",
  },
  {
    src: "/fotosed/puente2.jpg",
    alt: "Puente sobre el lago de Maracaibo",
    class: "styles.item12",
    id: "",
  },
];
export class Galeria extends React.Component {
  state = {
    isModalOpen: false,
    selectedImage: "",
  };
  render() {
    return (
      <>
        <section className={styles.container}>
          <div className={styles.photoContainer}>
            {photoList.map((value) => (
              <div
                className={styles.imageContainer}
                onClick={() =>
                  this.setState({ isModalOpen: true, selectedImage: value.src })
                }
              >
                <figure className={styles.figureContainer}>
                  <img
                    className={styles.img}
                    src={value.src}
                    alt={value.alt}
                  ></img>
                </figure>
              </div>
            ))}
          </div>
        </section>
        {this.state.isModalOpen && (
          <PopUp
            image={this.state.selectedImage}
            closeModal={() =>
              this.setState({ isModalOpen: false, selectedImage: "" })
            }
          />
        )}
      </>
    );
  }
}
