import { Container, Grid, Icon, SvgIcon } from "@mui/material";
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
              <h2>DayCare Indonesia</h2>
              <p color="white">
                Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem
                Ipsum Dolor sit amet
              </p>
              <br></br>
              <p>Jalan Margonda Raya No 31, Depok, Jawa Barat</p>
            </Grid>
            <Grid item md={4} xs={4}>
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
            <Grid item md={4} xs={8}>
              <h2>Find Us</h2>
              {sosmed.map((list, key) => {
                return (
                  <div className={styles.sosmed} key={key}>
                    <SvgIcon
                      component={list.icon}
                      // style={{ color: `${list.color}` }}
                    ></SvgIcon>
                    <div className={styles.icon}>{list.name}</div>
                  </div>
                );
              })}
            </Grid>
          </Grid>
          <hr></hr>
          <p className="text-center">&copy; 2022 Daycare Indonesia</p>
        </Container>
      </div>
    </>
  );
}
