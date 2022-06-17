// import AboutUs from "../../components/Section/AboutUs/AboutUsCard";
import AboutUsView from "../../components/Section/AboutUs/AboutUsView";
import Clients from "../../components/Section/Clients/Clients";
import Hero from "../../components/Section/Hero/Hero";
import News from "../../components/Section/News/News";
import Usp from "../../components/Section/Usp/Usp";

const Homepage = (props) => {
  return (
    <>
      <Hero></Hero>
      <Usp></Usp>
      {/* <AboutUs></AboutUs> */}
      <AboutUsView></AboutUsView>
      <Clients></Clients>
      {/* <News></News> */}
    </>
  );
};

export default Homepage