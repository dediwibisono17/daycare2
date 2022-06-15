import styles from "./AboutUs.module.scss";
import { Grid } from "@mui/material";
import CardUI from "../../UI/CardUI/CardUI";

const AboutUs = (props) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={4}>
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
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </CardUI>
        </Grid>
        <Grid item sm={4}>
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
              <ul className={styles['check__ul']}>
                <li>Working Mom</li>
                <li>Working Mom</li>
                <li>Working Mom</li>
                <li>Working Mom</li>
                <li>Working Mom</li>
                <li>Working Mom</li>
                <li>Working Mom</li>
              </ul>
            </div>
          </CardUI>
        </Grid>
        <Grid item sm={4}>
          <CardUI>
            <div className={styles.wrap}>
              <h2 className={styles.title}>Working Hours</h2>
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
            </div>
          </CardUI>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
