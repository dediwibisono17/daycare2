import CardCondition from "../../UI/CardCondition/CardCondition"

const News = (props) =>{
    return (
        <>
            <CardCondition variant="news">
                <h2>Ini News</h2>
                <p>desc</p>
            </CardCondition>

            <CardCondition variant="working">
                <h2>Ini News</h2>
                <p>desc</p>
            </CardCondition>
        </>
    )
}

export default News