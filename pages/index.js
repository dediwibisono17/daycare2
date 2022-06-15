import { Container } from "@mui/system";
import ButtonUI from "../components/UI/ButtonUI/ButtonUI";
import Header from "../components/Shared/Header/Header";
import Homepage from "../views/Home/Homepage";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Container>
        <h1>Homepage</h1>
        <Homepage></Homepage>
        <ButtonUI>Test</ButtonUI>
      </Container>
    </>
  )
}
