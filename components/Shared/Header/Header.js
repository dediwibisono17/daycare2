import styles from "./Header.module.scss";
import { Container, Drawer, SvgIcon } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { sosmed } from "../../Shared/menu.js";
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
  // console.log(sosmed);

  return (
    <>
      <header className={styles.wrap}>
        <Container>
          <div className={styles["header-left"]}>
            <Link href="/">
              <a>
                <img
                  src="../../../logo.png"
                  alt="logo"
                  title="logo"
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
              <h2 className={styles.h2}>DayCare Indonesia</h2>
              <HeaderMenu variant={styles.mobile}></HeaderMenu>
              <div className={styles.copy}>
                <ul className={styles.ul}>
                  {sosmed.map((listed, key) => {
                    return (
                      <li key={key}>
                        <SvgIcon
                          component={listed.icon}
                          style={{ color: `${listed.color}` }}
                        ></SvgIcon>
                        <div>{listed.name}</div>
                      </li>
                    );
                  })}
                </ul>
                <div>&copy; 2022 Daycare Indonesia</div>
              </div>
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
