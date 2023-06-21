//rfc
import React from "react";
import Header from "../../components/Shared/Header/Header";
import News from "../../views/News/News";
import Footer from "../../components/Shared/Footer/Footer";

export default function newsPage() {
  return (
    <>
      <Header></Header>
      <div>news</div>
      <News></News>
    </>
  );
}
