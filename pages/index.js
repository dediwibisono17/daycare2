import News from "../components/Section/News/News";
import { Container } from "@mui/system";
import Hero from "../components/Section/Hero/Hero";
import ButtonUI from "../components/UI/ButtonUI/ButtonUI";
import AboutUs from "../components/Section/AboutUs/AboutUs";

export default function Home() {
  return (
    <>
      <Container>
        <Hero></Hero>
        <h1>Homepage</h1>
        <ButtonUI>Test</ButtonUI>
        <AboutUs></AboutUs>
        <News variant="news"></News>
      </Container>
    </>
  )
}
