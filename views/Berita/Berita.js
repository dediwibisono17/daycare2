import styles from "./Berita.module.scss";
import Link from "next/link";
import useSWR from "swr";
import { Container, Grid, Skeleton } from "@mui/material";
import CardUI from "../../components/UI/CardUI/CardUI";
import ButtonUI from "../../components/UI/ButtonUI/ButtonUI";
import { Send } from "@mui/icons-material";
import Head from "next/head";
import Shared from "../../components/Shared";
import Header from "../../components/Shared/Header/Header";


async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}
const Berita = (props) => {
    const API = "https://newsapi.org/v2/everything?q=apple&from=2023-06-20&to=2023-06-20&sortBy=popularity&pageSize=10&apiKey=e407016d005947cf9b06e78d27b314cf";

    const { data, error } = useSWR(API, fetcher);
      console.log(data.articles[0]);

    const meta = {
        title: "Berita | Daycare Indonesia",
        desc: "Rumah Kedua Untuk Buah Hati Tercinta",
        url: "https://daycare2.vercell.app",
        shorttitle: "Daycare",
    };
    return (
        <>
           
        </>
    )
}

export default Berita;