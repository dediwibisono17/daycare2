import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Shared/Header/Header";
import { Container, Grid, Skeleton } from "@mui/material";
import styles from "./help.module.scss";
import useSWR from "swr";
import Footer from "../../components/Shared/Footer/Footer";
import Head from "next/head";

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
export default function IdPage(props) {
  //buat dynamic route
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/comments?id=${id}`,
    fetcher
  );
  const backButton = () => {
    history.back();
  };
  // const helpSlug = id?.split("-").join(" ").toUpperCase();
  const meta = {
    title: "Gallery | Daycare Indonesia",
    desc: "Rumah Kedua Untuk Buah Hati Tercinta",
    url: "https://daycare2.vercell.app",
    shorttitle: "Daycare",
  };
  return (
    <>
      <Head>
        {!data ? (
          <title>Daycare Indonesia - News</title>
        ) : (
          data.map((list, key) => {
            return <title key={key}>Detail - {list.name}</title>;
          })
        )}
      </Head>
      <Header></Header>
      <div className={styles.wrap}>
        <Container>
          <div onClick={backButton} className={styles.pointer}>
            Back
          </div>
          {!data
            ? [1, 2].map((data) => {
                // key pake data untuk looping
                return (
                  <Grid item md={12} key={data}>
                    <Skeleton variant="rectangular" height={200} />
                  </Grid>
                );
              })
            : data.map((list, key) => {
                return (
                  <div key={key}>
                    <h1 className="text-center">{list.name}</h1>
                    <p>{list.body}</p>
                  </div>
                );
              })}
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
}
