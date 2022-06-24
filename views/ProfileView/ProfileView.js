import Head from "next/head";
import React from "react";
import Profile from "../../components/Section/Profile/Profile";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import Shared from "../../components/Shared";

function ProfileView() {
  const meta = {
    title: "About Us | Daycare Indonesia",
    desc: "Rumah Kedua Untuk Buah Hati Tercinta",
    url: "https://daycare2.vercell.app",
    shorttitle: "Daycare",
  };
  return (
    <>
      <Shared meta={meta}>
        <Profile></Profile>
      </Shared>
    </>
  );
}

export default ProfileView;
