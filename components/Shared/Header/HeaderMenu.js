import { useRouter } from "next/router";
import React from "react";
import { data } from "../../Shared/menu.js";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function HeaderMenu(props) {
  const router = useRouter();
  const handleActiveLink = (link) => {
    if (link !== "/") return router.pathname.includes(link.split("-")[0]);
    if (router.pathname == "/") return true;
    return false;
  };

  const { variant } = props;
  return (
    <ul className={variant !== undefined ? variant : ""}>
      {data.map((list, idx) => (
        <li
          key={idx}
          className={handleActiveLink(list.link) ? styles.active : undefined}
        >
          <Link href={list.link}>
            <a>{list.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
