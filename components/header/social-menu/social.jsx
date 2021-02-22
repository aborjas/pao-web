import * as React from "react";
//@ts-ignore
import styles from "./social.module.scss";
import SVG from "react-inlinesvg";

const socialMediaList = [
  {
    link: "https://www.pinterest.com/paolagarciafotografia/_saved/",
    icon: "/social/pinterest.svg",
  },
  {
    link: "https://www.instagram.com/paolagarciafoto/",
    icon: "/social/instagram.svg",
  },
  {
    link: "https://www.facebook.com/paolagarciafoto/",
    icon: "/social/facebook.svg",
  },
];

export const SocialMenu = ({ isHeader=false }) => {
  return (
    <div className={`${styles.container} ${isHeader ? styles.inHeader : ''}`}>
      <ul className={styles.list}>
        {socialMediaList.map((value) => (
          <li className={styles.item}>
            <a className={styles.iconBox} href={value.link} target="_blank">
              <SVG className={styles.icon} src={value.icon} />
            </a>
          </li>
        ))}
        <li className={styles.item}>
          <a
            className={styles.iconBox}
            href="mailto:paolagarciafoto@gmail.com"
            target="_blank"
          >
            <SVG className={styles.icon} src="/social/gmail.svg" />
          </a>
        </li>
      </ul>
    </div>
  );
};
