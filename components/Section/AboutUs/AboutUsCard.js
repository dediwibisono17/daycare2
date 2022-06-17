import styles from "./AboutUs.module.scss";
import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CardUI from "../../UI/CardUI/CardUI";
import ButtonUI from "../../UI/ButtonUI/ButtonUI";
import { Send, Check } from "@mui/icons-material";

const AboutUsCard = (props) => {
  const {
    articleImage,
    articleTitle,
    articleDesc,
    checkpointImg,
    checkpointPoint,
    workingTitle,
    workingDesc,
    workingHari,
  } = props;
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <CardUI>
              <div className={styles["card-news"]}>
                <img
                  src={articleImage}
                  title={articleTitle}
                  alt={articleTitle}
                  loading="lazy"
                />
              </div>
              <div className={styles.pad}>
                <h2 className={`${styles.title} color-secondary`}>
                  {articleTitle}
                </h2>
                <p>{articleDesc}</p>
              </div>
            </CardUI>
          </Grid>
          <Grid item md={4} xs={12}>
            <CardUI>
              <div className={styles["card-news"]}>
                <img
                  src={checkpointImg}
                  alt="Gambar Checkpoint"
                  title="Gambar Checkpoint"
                  loading="lazy"
                />
              </div>
              <div className={styles.check}>
                <List>
                  <ListItem className={styles["font-size"]}>
                    <ListItemIcon className={styles.iconmui}>
                      <Check color="primary"></Check>
                    </ListItemIcon>
                    <ListItemText primary={checkpointPoint}></ListItemText>
                  </ListItem>
                </List>
              </div>
            </CardUI>
          </Grid>
          <Grid item md={4} xs={12}>
            <CardUI>
              <div className={styles.wrap}>
                <h2 className={`${styles.title} color-secondary`}>
                  {workingTitle}
                </h2>
                <p>{workingDesc}</p>
                <ul className={styles.all}>{workingHari}</ul>
                <ButtonUI
                  variant="contained"
                  color="primary"
                  customClass={styles.button}
                  endIconMaterial={<Send />}
                >
                  Hubungi Kami
                </ButtonUI>
              </div>
            </CardUI>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutUsCard;
