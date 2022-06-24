import styles from "./Gallery.module.scss";
import useSWR from "swr";
import Header from "../../components/Shared/Header/Header";
import { Container, Grid, Skeleton } from "@mui/material";
import Footer from "../../components/Shared/Footer/Footer";
import Head from "next/head";
import Shared from "../../components/Shared";

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
const Gallery = (props) => {
  const API = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=12";

  const { data, error } = useSWR(API, fetcher);
  console.log(data);

  const meta = {
    title: "Gallery | Daycare Indonesia",
    desc: "Rumah Kedua Untuk Buah Hati Tercinta",
    url: "https://daycare2.vercell.app",
    shorttitle: "Daycare",
  };
  return (
    <>
      <Shared meta={meta}>
        <Container>
          <div className={styles.wrap}>
            <Grid container spacing={2}>
              {!data
                ? [1, 2, 3, 4, 5, 6].map((data) => {
                    // key pake data untuk looping
                    return (
                      <Grid item md={4} key={data}>
                        <Skeleton variant="rectangular" height={200} />
                      </Grid>
                    );
                  })
                : data.map((list, key) => {
                    return (
                      <Grid item md={4} key={key}>
                        <div className={styles.image}>
                          <img
                            src={list.url}
                            alt={list.title}
                            title={list.title}
                            loading="lazy"
                          />
                        </div>
                      </Grid>
                    );
                  })}
            </Grid>
          </div>
        </Container>
      </Shared>
    </>
  );
};

export default Gallery;
