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
  {
    link: "#",
    icon: "/social/gmail.svg",
  },
];

export const SocialMenu = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {socialMediaList.map((value) => (
          <li className={styles.item}>
            <a className={styles.iconBox} href={value.link} target="_blank">
              <SVG className={styles.icon} src={value.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
