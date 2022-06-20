import styles from "./Gallery.module.scss";
import useSWR from "swr";
import Header from "../../components/Shared/Header/Header";
import { Grid, Skeleton } from "@mui/material";

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
const Gallery = (props) => {
  const API = "https://jsonplaceholder.typicode.com/photos";

  const { data, error } = useSWR(API, fetcher);
  console.log(data);

  return (
    <>
      <Header></Header>
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
    </>
  );
};

export default Gallery;
