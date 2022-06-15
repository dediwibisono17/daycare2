import { Grid, Typography } from "@mui/material";
import React from "react";
import CardUI from "../../UI/CardUI/CardUI";
import styles from "./BabySitter.module.scss";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function BabySitter(props) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <CardUI variant={styles.noshadow}>
            <div className={`${styles.quotes} ${styles.blue}`}>
              <FormatQuoteIcon
                color="primary"
                className={`${styles["quotes__abs"]} font-big`}
              ></FormatQuoteIcon>
              <p className={styles["quotes__content"]}>
                Aenean massa. Cum sociis sem Theme natoque penatibus et magnis
                dis et magnis dis amet parturient montes natoque.
              </p>
              <Typography className={styles.right}>Lala</Typography>
            </div>
          </CardUI>
        </Grid>
        <Grid item md={4}>
          <CardUI variant={styles.noshadow}>
            <div className={`${styles.quotes} ${styles.purple}`}>
              <FormatQuoteIcon
                color="primary"
                className={`${styles["quotes__abs"]} font-big`}
              ></FormatQuoteIcon>
              <p className={styles["quotes__content"]}>
                Aenean massa. Cum sociis sem Theme natoque penatibus et magnis
                dis et magnis dis amet parturient montes natoque.
              </p>
              <Typography className={styles.right}>Lala</Typography>
            </div>
          </CardUI>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </>
  );
}
