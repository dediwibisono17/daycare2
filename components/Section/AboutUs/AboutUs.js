import styles from './AboutUs.module.scss'
import { Grid } from '@mui/material';

const AboutUs = (props) => {
    return (
        <>
            <Grid container>
                <Grid item sm={4}>
                    <h3>Ceki ceki</h3>
                </Grid>
                <Grid item sm={4}>
                    <h3>Ceki ceki 2</h3>
                </Grid>
                <Grid item sm={4} className={styles.soft}>
                    <h3>Ceki ceki 3</h3>
                </Grid>
            </Grid>

        </>
    )
}

export default AboutUs