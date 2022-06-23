import React from "react";
import ClientsCard from "./ClientsCard.js";
import data from "./dataClient.js";
import { Container, Grid } from "@mui/material";
import styles from "./Clients.module.scss";
// import useSWR from "swr";

// async function fetcher(url) {
//   const res = await fetch(url);
//   const json = await res.json();
//   return json;
// }
export default function Clients() {
  // const { data, error } = useSWR(
  //   "https://jsonplaceholder.typicode.com/comments",
  //   fetcher
  // );
  // console.log(data);

  return (
    <>
      <div className={styles.wrap}>
        <Container>
          <h2 className="font-big text-center color-primary line-height">
            Rp1,5 Juta / bulan
          </h2>
          <br />
          <h2 className="text-center">Testimoni Bunda</h2>
          {/* {data.map((list, key) => {
            return <p key={key}>{list.name}</p>;
          })} */}
          <Grid container item spacing={2}>
            {data.map((list, key) => {
              //   console.log(list);
              return (
                <ClientsCard
                  key={key}
                  description={list.desc}
                  bundaName={list.name}
                  jobs={list.job}
                ></ClientsCard>
              );
            })}
            {/* shorthand pake kurung biasa */}
            {/* {data.map((list, key) => (
                <ClientsCard
                  key={key}
                  description={list.desc}
                  bundaName={list.name}
                ></ClientsCard>
            ))} */}
          </Grid>
        </Container>
      </div>
    </>
  );
}
