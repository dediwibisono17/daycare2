import AboutUs from "../../components/Section/AboutUs/AboutUs";
import BabySitter from "../../components/Section/BabySitter/BabySitter";
import Hero from "../../components/Section/Hero/Hero";
import News from "../../components/Section/News/News";
import Usp from "../../components/Section/Usp/Usp";

const Homepage = (props) => {
  return (
    <>
      <Hero></Hero>
      <Usp></Usp>
      <AboutUs></AboutUs>
      <BabySitter></BabySitter>
      <News></News>
    </>
  );
};

export default Homepage