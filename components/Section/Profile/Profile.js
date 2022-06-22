import {
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from "@mui/material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CardUI from "../../UI/CardUI/CardUI";
import styles from "./Profile.module.scss";
import useSWR from "swr";
import Link from "next/link";

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

const Profile = (props) => {
  const { data, error } = useSWR("https://swapi.dev/api/people/", fetcher);
  // console.log(
  //   data.results.map((list, key) => {
  //     return list.name;
  //   })
  // );
  return (
    <>
      <Container>
        <div className={styles.wrap}>
          <Grid container spacing={2}>
            {!data
              ? [1, 2, 3, 4, 5, 6].map((data) => {
                  // key pake data untuk looping
                  return (
                    <Grid item md={4} key={data}>
                      <Skeleton variant="rectangular" height={200} />
                    </Grid>
                  );
                })
              : data.results.map((list, key) => {
                  return (
                    <Grid item md={4} key={data}>
                      <CardUI>
                        <div className={styles.profile}>
                          <h2 className={styles.h2}>{list.name}</h2>
                          <List>
                            <ListItemButton>
                              <ListItemIcon>
                                <AccessibilityIcon></AccessibilityIcon>
                              </ListItemIcon>
                              <ListItemText
                                primary={`${list.height} cm`}
                              ></ListItemText>
                            </ListItemButton>
                            <ListItemButton>
                              <ListItemIcon>
                                <AccessibilityIcon></AccessibilityIcon>
                              </ListItemIcon>
                              <ListItemText
                                primary={`${list.mass} kg`}
                              ></ListItemText>
                            </ListItemButton>
                            <ListItemButton>
                              <ListItemIcon>
                                <CalendarMonthIcon></CalendarMonthIcon>
                              </ListItemIcon>
                              <ListItemText
                                primary={`${list.birth_year}`}
                              ></ListItemText>
                            </ListItemButton>
                          </List>
                        </div>
                      </CardUI>
                    </Grid>
                  );
                })}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Profile;
