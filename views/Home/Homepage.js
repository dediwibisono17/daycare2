import AboutUs from "../../components/Section/AboutUs/AboutUs";
import Hero from "../../components/Section/Hero/Hero";
import News from "../../components/Section/News/News";
import Usp from "../../components/Section/Usp/Usp";

const Homepage = (props) => {
  return (
    <>
      <Hero></Hero>
      <Usp></Usp>
      <AboutUs></AboutUs>
      <News></News>
    </>
  );
};

export default Homepage