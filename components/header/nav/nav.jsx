import * as React from "react";
//@ts-ignore
import styles from "./nav.module.scss";
import Link from "next/link";

const navList = [
  {
    name: "SOBRE MÍ",
    link: "#",
  },
  {
    name: "GALERÍA",
    link: "#",
  },
  {
    name: "CAPACITACIONES",
    link: "#",
  },
];

export class Nav extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <Link href="#">
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
      </Link>
    );
  }
}

// export const Nav = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   return (
//     <Link href="#">
//       <div className={styles.nav}>
//         <div
//           onClick={() => setIsOpen(!isOpen)}
//           className={`${styles.btnContainer} ${
//             isOpen ? styles.isMenuOpen : ""
//           }`}
//         >
//           <div className={styles.btnUp}></div>
//           <div className={styles.btnCenter1}></div>
//           <div className={styles.btnCenter2}></div>
//           <div className={styles.btnDown}></div>
//         </div>
//       </div>
//     </Link>
//   );
// };
