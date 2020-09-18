import * as React from "react";
//@ts-ignore
import styles from "./social.module.scss";
import SVG from "react-inlinesvg";

const socialMediaList = [
  {
    link: "#",
    icon: "/social/pinterest.svg",
  },
  {
    link: "#",
    icon: "/social/instagram.svg",
  },
  {
    link: "#",
    icon: "/social/facebook.svg",
  },
  {
    link: "#",
    icon: "/social/gmail.svg",
  },
];

export const SocialMenu = () => {
  return (
    <ul className={styles.list}>
      {socialMediaList.map((value) => (
        <li className={styles.item}>
          <a href={value.link} target="_blank">
            <SVG className={styles.icon} src={value.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};
