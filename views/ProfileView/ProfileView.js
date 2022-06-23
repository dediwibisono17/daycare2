import Head from "next/head";
import React from "react";
import Profile from "../../components/Section/Profile/Profile";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

function ProfileView() {
  return (
    <>
      <Head>
        <title>Daycare Indonesia - About us</title>
      </Head>
      <Header></Header>
      <Profile></Profile>
      <Footer></Footer>
    </>
  );
}

export default ProfileView;
