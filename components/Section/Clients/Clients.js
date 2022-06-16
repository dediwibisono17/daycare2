import React from "react";
import ClientsCard from "./ClientsCard.js";
import data from "./dataClient.js";
import { Container, Grid } from "@mui/material";
import styles from "./Clients.module.scss";

export default function Clients() {
  return (
    <>
      <div className={styles.wrap}>
        <Container>
          <h2 className="text-center">Testimoni Bunda</h2>
          <Grid container spacing={2}>
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
