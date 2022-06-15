import styles from "./Header.module.scss";
import { Container } from "@mui/material";
import Link from "next/link";

const Header = (props) => {
  return (
    <>
      <header className={styles.wrap}>
        <Container>
          <div className={styles["header-left"]}>
            <Link href="/">
              <a >
                  <h1>DayCare Indonesia</h1>
              </a>
            </Link>
          </div>
          <div className={styles["header-right"]}>
            <ul>
              <li>Home</li>
              <li>Gallery</li>
              <li>News</li>
              <li>About us</li>
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
