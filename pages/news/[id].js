import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Shared/Header/Header";

export default function IdPage(props) {
  //buat dynamic route
  const router = useRouter();
  const { id } = router.query;
  console.log(props);
  return (
    <>
      <Header></Header>
      <h1>Detail News</h1>
      {id}
    </>
  );
}
