import { Grid, Typography } from "@mui/material";
import React from "react";
import CardUI from "../../UI/CardUI/CardUI";
import styles from "./Clients.module.scss";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Clients(props) {
  const {bundaName, description, jobs} = props;
  return (
    <>
      
        <Grid item md={4}>
          <CardUI variant={styles.noshadow}>
            <div className={`${styles.quotes} ${styles.blue}`}>
              <FormatQuoteIcon
                color="primary"
                className={`${styles["quotes__abs"]} font-big`}
              ></FormatQuoteIcon>
              <p className={styles["quotes__content"]}>
                {description}
              </p>
              <Typography className={styles.right}>{bundaName} (<strong>{jobs}</strong>)</Typography>
            </div>
          </CardUI>
        </Grid>
    </>
  );
}
