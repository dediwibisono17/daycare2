import React from "react";
import AboutUsCard from "./AboutUsCard";
import data from "./dataAbout.js";
import styles from "./AboutUs.module.scss";

export default function AboutUs() {
  return (
    <>
      {data.map((list, key) => {
        console.log(
          list.checkpoint.point.map((data, key) => {
            return data;
          })
        );
        return (
          <AboutUsCard
            key={key}
            articleImage={list.article.img}
            articleTitle={list.article.title}
            articleDesc={list.article.desc}
            checkpointImg={list.checkpoint.img}
            // benefit.map((a, i) => { h += `<li>${a}</li>` });
            checkpointPoint={list.checkpoint.point.map((a, i) => {return a})}
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
