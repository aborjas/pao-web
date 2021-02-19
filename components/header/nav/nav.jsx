import * as React from "react";
//@ts-ignore
import styles from "./nav.module.scss";
import Link from "next/link";

const navList = [
  {
    name: "SOBRE MÍ",
    link: "#about",
  },
  {
    name: "GALERÍA",
    link: "#gal",
  },
  {
    name: "CAPACITACIONES",
    link: "#capacitaciones",
  },
];

export class Nav extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <>
        <div className={styles.nav}>
          <div
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            className={`${styles.btnContainer} ${
              this.state.isOpen ? styles.isMenuOpen : ""
            }`}
          >
            <div className={styles.btnUp}></div>
            <div className={styles.btnCenter1}></div>
            <div className={styles.btnCenter2}></div>
            <div className={styles.btnDown}></div>
          </div>
        </div>
        <div
          className={`${styles.menuContainer} ${
            this.state.isOpen ? styles.menuContainerOpen : ""
          }`}
        >
          <ul className={styles.list}>
            {navList.map((value) => (
              <li className={styles.item}>
                <Link href={value.link}>
                  <a
                    onClick={() =>
                      this.setState({ isOpen: !this.state.isOpen })
                    }
                    className={styles.name}
                  >
                    {value.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.text}>
            <p className={styles.text}>SÍGUEME EN INSTAGRAM</p>
            <a
              className={styles.ig}
              href="https://www.instagram.com/paolagarciafoto/"
              target="_blank"
            >
              @paolagarciafoto
            </a>
          </div>
        </div>
      </>
    );
  }
}
