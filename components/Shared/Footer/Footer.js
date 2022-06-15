import { Container, Grid } from "@mui/material";
import React from "react";
import styles from './Footer.module.scss'

export default function Footer(props) {
  return (
    <>
      <div className={styles.bgcolor}>
          <Container>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <h2>DayCare Indonesa</h2>
                <p color="white">Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet</p>
              </Grid>
              <Grid item md={4} xs={12}>
                <h2>Sitemap</h2>
              </Grid>
              <Grid item md={4} xs={12}>
                <h2>Find Us</h2>
              </Grid>
            </Grid>
          </Container>
      </div>
    </>
  );
}
