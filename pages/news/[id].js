import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Shared/Header/Header";
import { Container } from "@mui/material";
import styles from "./help.module.scss";

export default function IdPage(props) {
  //buat dynamic route
  const router = useRouter();
  const { id } = router.query;
  // console.log(props);

  const helpSlug = id?.split("-").join(" ").toUpperCase();

  return (
    <>
      <Header></Header>
      <div className={styles.wrap}>
        <Container>
          <h1 className="text-center">{helpSlug}</h1>
        </Container>
      </div>
    </>
  );
}
