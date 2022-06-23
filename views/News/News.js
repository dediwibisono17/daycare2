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
    "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=18",
    fetcher
  );
  // console.log(data);
  return (
    <>
      <Container>
        <div className={styles.newsall}>
          <h1 className="text-center">Semua Berita</h1>
          <p className="text-center">
            <strong>Klik Untuk melihat detail Berita</strong>
          </p>
          {/* <Link href="/news/haha">
            <a>Link</a>
          </Link> */}
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
                    const id_ = list.id;
                    const title_ = list.name;
                    const slug = title_.replace(/\s+/g, "-").toLowerCase();
                    const linkHelp = "/news/";
                    const linked = linkHelp + id_;

                    const handleDesc = (text, maxLength) => {
                      if (text.length > maxLength)
                        return `${text.substr(0, maxLength)}...`;
                      return text;
                    };

                    return (
                      <Grid key={key} item md={4} xs={6}>
                        <Link href={linked}>
                          <a>
                            <div className={styles.wrap}>
                              <CardUI variant={styles.padd}>
                                <div className={styles.content}>
                                  {list.name}
                                </div>

                                <p>{handleDesc(list.body, 80)}</p>
                              </CardUI>
                            </div>
                          </a>
                        </Link>
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
