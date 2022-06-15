import { Box, Grid } from "@mui/material";
import styles from "./Usp.module.scss";

const Usp = (props) => {
  return (
    <>
      <Box className={styles.mtop}>
        <Grid container>
          <Grid md={4} className={styles.bold}>
            <div className={styles['usp']}>
            <div className={styles["usp__img"]}>
                <div className={styles["help-bola"]}></div>
              <div className={styles.top}>
                  <img
                    src="https://lilo.qodeinteractive.com/wp-content/uploads/2018/04/icon-with-text-1.png"
                    alt=""
                    title=""
                    loading="lazy"
                  />
              </div>
            </div>
            <div className={styles["usp__desc"]}>
                <h2>Rumah</h2>
                <p>Rumah yang luas dan memiliki lingkungan yang baik</p>
            </div>
            </div>
          </Grid>
          <Grid md={4} className={styles.bold}>
            <div className={styles['usp']}>
            <div className={styles["usp__img"]}>
                <div className={styles["help-bola"]}></div>
              <div className={styles.top}>
                  <img
                    src="https://lilo.qodeinteractive.com/wp-content/uploads/2018/04/icon-with-text-1.png"
                    alt=""
                    title=""
                    loading="lazy"
                  />
              </div>
            </div>
            <div className={styles["usp__desc"]}>
                <h2>Pengasuh</h2>
                <p>Memiliki pengasuh yang sayang dengan anak kecil dan mengayomi</p>
            </div>
            </div>
          </Grid>
          <Grid md={4} className={styles.bold}>
            <div className={styles['usp']}>
            <div className={styles["usp__img"]}>
                <div className={styles["help-bola"]}></div>
              <div className={styles.top}>
                  <img
                    src="https://lilo.qodeinteractive.com/wp-content/uploads/2018/04/icon-with-text-1.png"
                    alt=""
                    title=""
                    loading="lazy"
                  />
              </div>
            </div>
            <div className={styles["usp__desc"]}>
                <h2>Program</h2>
                <p>Makan 3x sehari, bermain di outdoor pagi hari, , Diajarkan sholat, mendengarkan murotal</p>
            </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Usp;