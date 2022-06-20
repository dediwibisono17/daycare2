import styles from "./News.module.scss";
import Link from "next/link";
import useSWR from "swr";
import { Container, Grid } from "@mui/material";
import CardUI from "../../components/UI/CardUI/CardUI";

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
const News = (props) => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );
  //   console.log(data);
  return (
    <>
      <Container>
        <h1>Ini News</h1>
        <Grid container>
          {data.map((list, key) => {
            return (
              <Grid key={key} item md={4}>
                <div className={styles.wrap}>
                  <CardUI>
                    <div className={styles.content}>{list.name}</div>
                  </CardUI>
                </div>
              </Grid>
            );
          })}
        </Grid>
        <Link href="/news/haha">
          <a>Link</a>
        </Link>
      </Container>
    </>
  );
};

export default News;
