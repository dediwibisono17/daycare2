import { Container } from "@mui/material";
import Gallery from "../../views/Gallery/Gallery";
import styles from "./galleryPage.module.scss";

const galleryPage = (props) => {
  return (
    <>
      <Container>
        <div className={styles.wrap}>
          <h1 className="text-center">Gallery Dummy</h1>
          <Gallery></Gallery>
        </div>
      </Container>
    </>
  );
};

export default galleryPage;
