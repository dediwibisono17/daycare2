import { Container, Grid } from "@mui/material";
import React from "react";
import styles from "./Footer.module.scss";
import { data, sosmed } from "../menu.js";
import Link from "next/link";

export default function Footer(props) {
  // console.log(sosmed.map((list) => list.icon));
  return (
    <>
      <div className={styles.bgcolor}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <h2>DayCare Indonesa</h2>
              <p color="white">
                Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem
                Ipsum Dolor sit amet
              </p>
            </Grid>
            <Grid item md={4} xs={12}>
              <h2>Sitemap</h2>
              <ul className={styles.sitemap}>
                {data.map((list, key) => {
                  return (
                    <li key={key}>
                      <Link href={list.link}>
                        <a>{list.title}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Grid>
            <Grid item md={4} xs={12}>
              <h2>Find Us</h2>
              {sosmed.map((list, key) => {
                return <div key={key}>{list.name}</div>;
              })}
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
