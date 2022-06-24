// import AboutUs from "../../components/Section/AboutUs/AboutUsCard";
import AboutUsView from "../../components/Section/AboutUs/AboutUsView";
import Clients from "../../components/Section/Clients/Clients";
import Hero from "../../components/Section/Hero/Hero";
import News from "../../components/Section/News/News";
import Usp from "../../components/Section/Usp/Usp";
import Shared from "../../components/Shared";

const Homepage = (props) => {
  const meta = {
    title: "Daycare Indonesia | Rumah Kedua Untuk Buah Hati Tercinta",
    desc: "Rumah Kedua Untuk Buah Hati Tercinta",
    url: "https://daycare2.vercell.app",
    shorttitle: "Daycare",
  };
  return (
    <>
      <Shared meta={meta}>
        <Hero></Hero>
        <Usp></Usp>
        {/* <AboutUs></AboutUs> */}
        <AboutUsView></AboutUsView>
        <Clients></Clients>
        {/* <News></News> */}
      </Shared>
    </>
  );
};

export default Homepage;
