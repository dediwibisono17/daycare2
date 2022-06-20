import styles from "./Header.module.scss";
import { Container, Drawer } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import data from "../../Shared/menu.js";
import HeaderMenu from "./HeaderMenu";

const Header = (props) => {
  const router = useRouter();

  const handleActiveLink = (link) => {
    if (link !== "/") return router.pathname.includes(link.split("-")[0]);
    if (router.pathname == "/") return true;
    return false;
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const barFunction = () => {
    setIsDrawerOpen(true);
  };
  const closeBar = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header className={styles.wrap}>
        <Container>
          <div className={styles["header-left"]}>
            <Link href="/">
              <a>
                <img
                  src="https://pbs.twimg.com/profile_images/1141751703923904512/Iov7a9tk_400x400.jpg"
                  alt=""
                  title=""
                  className={styles.logo}
                />
                <h1 className={styles.titleLogo}>DayCare Indonesia</h1>
              </a>
            </Link>
          </div>
          <div className={styles["header-right"]}>
            <div className={styles.bar} onClick={barFunction}>
              <div className={styles["bar-bar"]}></div>
              <div className={styles["bar-bar"]}></div>
              <div className={styles["bar-bar"]}></div>
            </div>

            <Drawer anchor="left" open={isDrawerOpen} onClose={closeBar}>
              <h2>DayCare Indonesia</h2>
              <ul>
                {data.map((list, key) => {
                  return (
                    <li
                      key={key}
                      className={
                        handleActiveLink(list.link) ? styles.active : undefined
                      }
                    >
                      <Link href={list.link}>
                        <a>{list.title}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Drawer>

            <div className={styles.isdesktop}>
              <HeaderMenu></HeaderMenu>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
