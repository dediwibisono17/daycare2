import { Container } from "@mui/material";
import Gallery from "../../views/Gallery/Gallery";
import styles from "./galleryPage.module.scss";

const galleryPage = (props) => {
  return (
    <>
      <h1 className="text-center">Gallery Dummy</h1>
      <Gallery></Gallery>
    </>
  );
};

export default galleryPage;
