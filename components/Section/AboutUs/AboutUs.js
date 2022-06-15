import styles from "./AboutUs.module.scss";
import {
  Button,
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

const AboutUs = (props) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <CardUI>
            <div className={styles["card-news"]}>
              <img
                src="https://lilo.qodeinteractive.com/wp-content/uploads/2018/04/h1-single-img-1.png"
                title=""
                alt=""
                loading="lazy"
              />
            </div>
            <div className={styles.pad}>
              <h2 className={`${styles.title} color-secondary`}>
                Menjaga si Buah Hati
              </h2>
              <p>
                Dolorum sit amet, consec tetuer adipiscing elit nean de commodo
                ligula eget dolor. Aenean massa tellus. Cume sociis Theme
                natoque pen tibus et magnis augue. Aenea sum ligula eget.
              </p>
            </div>
          </CardUI>
        </Grid>
        <Grid item md={4} xs={12}>
          <CardUI>
            <div className={styles["card-news"]}>
              <img
                src="https://lilo.qodeinteractive.com/wp-content/uploads/2018/04/h1-single-img-2.png"
                alt=""
                title=""
                loading="lazy"
              />
            </div>
            <div className={styles.check}>
              <List>
                <ListItem className={styles["font-size"]}>
                  <ListItemIcon className={styles.iconmui}>
                    <Check color="primary"></Check>
                  </ListItemIcon>
                  <ListItemText primary="Makan 3x Sehari"></ListItemText>
                </ListItem>
                <ListItem className={styles["font-size"]}>
                  <ListItemIcon className={styles.iconmui}>
                    <Check color="primary"></Check>
                  </ListItemIcon>
                  <ListItemText primary="Single-line item"></ListItemText>
                </ListItem>
              </List>
            </div>
          </CardUI>
        </Grid>
        <Grid item md={4} xs={12}>
          <CardUI>
            <div className={styles.wrap}>
              <h2 className={`${styles.title} color-secondary`}>
                Working Hours
              </h2>
              <p>Lorem ipsum dolor sit amet</p>
              <ul className={styles.all}>
                <li>
                  <span className={`${styles.day} bold`}>Senin</span>
                  <span className={styles.dotted}></span>
                  <span className={`${styles.hour} bold`}>07.00 - 18.00</span>
                </li>
                <li>
                  <span className={`${styles.day} bold`}>Selasa</span>
                  <span className={styles.dotted}></span>
                  <span className={`${styles.hour} bold`}>07.00 - 18.00</span>
                </li>
                <li>
                  <span className={`${styles.day} bold`}>Rabu</span>
                  <span className={styles.dotted}></span>
                  <span className={`${styles.hour} bold`}>07.00 - 18.00</span>
                </li>
                <li>
                  <span className={`${styles.day} bold`}>Kamis</span>
                  <span className={styles.dotted}></span>
                  <span className={`${styles.hour} bold`}>07.00 - 18.00</span>
                </li>
                <li>
                  <span className={`${styles.day} bold`}>Jumat</span>
                  <span className={styles.dotted}></span>
                  <span className={`${styles.hour} bold`}>07.00 - 18.00</span>
                </li>
              </ul>
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
    </>
  );
};

export default AboutUs;
