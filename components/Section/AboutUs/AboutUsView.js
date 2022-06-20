import React from "react";
import AboutUsCard from "./AboutUsCard";
import data from "./dataAbout";
import styles from "./AboutUs.module.scss";
import { ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Check } from "@mui/icons-material";

export default function AboutUsView() {
  return (
    <>
      {data.map((list, key) => {
        // console.log(list.checkpoint.point);
        return (
          <AboutUsCard
            key={key}
            articleImage={list.article.img}
            articleTitle={list.article.title}
            articleDesc={list.article.desc}
            checkpointImg={list.checkpoint.img}
            checkpointPoint={list.checkpoint.point.map((a, i) => {
              //return <ListItemText key={i}>{a}</ListItemText>;
              return (
                <ListItem key={i} className={styles["font-size"]}>
                  <ListItemIcon className={styles.iconmui}>
                    <Check color="primary"></Check>
                  </ListItemIcon>
                  <ListItemText primary={a}></ListItemText>
                </ListItem>
              );
            })}
            workingTitle={list.working.title}
            workingDesc={list.working.desc}
            workingHari={list.working.hari.map((day, key) => {
              return (
                <li key={key}>
                  <span className={`${styles.day} bold`}>{day.name}</span>
                  <span className={styles.dotted}></span>
                  <span className={`${styles.hour} bold`}>{day.jam}</span>
                </li>
              );
            })}
          ></AboutUsCard>
        );
      })}
    </>
  );
}
