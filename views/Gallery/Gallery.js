import styles from "./Gallery.module.scss";
import useSWR from "swr";
import Header from "../../components/Shared/Header/Header";
import { Container, Grid, Skeleton } from "@mui/material";
import Footer from "../../components/Shared/Footer/Footer";
import Head from "next/head";

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
const Gallery = (props) => {
  const API = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=12";

  const { data, error } = useSWR(API, fetcher);
  console.log(data);

  return (
    <>
      <Head>
        <title>Daycare Indonesia - Gallery</title>
      </Head>
      <Header></Header>
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
      <Footer></Footer>
    </>
  );
};

export default Gallery;
