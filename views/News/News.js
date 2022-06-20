import styles from "./News.module.scss";
import Link from "next/link";
import useSWR from "swr";
import { Container, Grid, Skeleton } from "@mui/material";
import CardUI from "../../components/UI/CardUI/CardUI";
import ButtonUI from "../../components/UI/ButtonUI/ButtonUI";
import { Send } from "@mui/icons-material";

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
const News = (props) => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  // console.log(data);
  return (
    <>
      <Container>
        <div className={styles.newsall}>
          <h1 className="text-center">Semua Berita</h1>
          <Link href="/news/haha">
            <a>Link</a>
          </Link>
          <Grid container>
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
                : data.map((list, key) => {
                    const title_ = list.title;
                    const slug = title_.replace(/\s+/g, "-").toLowerCase();
                    const linkHelp = "/news/";
                    const linked = linkHelp + slug;
                    return (
                      <Grid key={key} item md={4}>
                        <div className={styles.wrap}>
                          <CardUI variant={styles.padd}>
                            <div className={styles.content}>{list.title}</div>
                            <p>{list.body}</p>
                            <Link href={linked}>
                              <a>
                                <ButtonUI
                                  variant="contained"
                                  color="primary"
                                  customClass={styles.button}
                                  endIconMaterial={<Send />}
                                >
                                  Link
                                </ButtonUI>
                              </a>
                            </Link>
                          </CardUI>
                        </div>
                      </Grid>
                    );
                  })}
              {/* <Grid item md={4}>
                <Skeleton variant="rectangular" height={200} />
              </Grid>
              <Grid item md={4}>
                <Skeleton variant="rectangular" height={200} />
              </Grid> */}
            </Grid>
            {/* {data?.map((list, key) => {
              const title_ = list.title;
              const slug = title_.replace(/\s+/g, "-").toLowerCase();
              const linkHelp = "/news/";
              const linked = linkHelp + slug;
              return (
                <Grid key={key} item md={4}>
                  <div className={styles.wrap}>
                    <CardUI variant={styles.padd}>
                      <div className={styles.content}>{list.title}</div>
                      <p>{list.body}</p>
                      <Link href={linked}>
                        <a>Link</a>
                      </Link>
                    </CardUI>
                  </div>
                </Grid>
              );
            })} */}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default News;
