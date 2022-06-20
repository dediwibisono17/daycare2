import styles from "./Header.module.scss";
import { Container } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();

  let data = [
    { link: "/", title: "Home" },
    { link: "/gallery", title: "Gallery" },
    { link: "/news", title: "News" },
    { link: "/about-us", title: "About Us" },
  ];
  const handleActiveLink = (link) => {
    if (link !== "/") return router.pathname.includes(link.split("-")[0]);
    if (router.pathname == "/") return true;
    return false;
  };

  return (
    <>
      <header className={styles.wrap}>
        <Container>
          <div className={styles["header-left"]}>
            <Link href="/">
              <a>
                {/* <img
                  src="https://pbs.twimg.com/profile_images/1141751703923904512/Iov7a9tk_400x400.jpg"
                  alt=""
                  title=""
                  className={styles.logo}
                /> */}
                <h1 className={styles.titleLogo}>DayCare Indonesia</h1>
              </a>
            </Link>
          </div>
          <div className={styles["header-right"]}>
            {/* <ul className={styles.all}>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a>Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a>News</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul> */}

            <ul>
              {data.map((list, idx) => (
                <li
                  key={idx}
                  className={
                    handleActiveLink(list.link) ? styles.active : undefined
                  }
                >
                  <Link href={list.link}>
                    <a>{list.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
