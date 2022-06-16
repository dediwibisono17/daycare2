import { Container } from "@mui/system";
import ButtonUI from "../components/UI/ButtonUI/ButtonUI";
import Header from "../components/Shared/Header/Header";
import Homepage from "../views/Home/Homepage";
import Footer from "../components/Shared/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      
        <h1>Homepage</h1>
        <Homepage></Homepage>
        <ButtonUI>Test</ButtonUI>
      <Footer></Footer>
    </>
  )
}
