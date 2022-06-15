import styles from './News.module.scss';
import Link from "next/link";

const News = (props) => {
    return(
        <>
            <h1>Ini News</h1>
            <Link href="/news/haha"><a>Link</a></Link>
        </>
    )
}

export default News