import CardUI from '../CardUI/CardUI';
import styles from './CardCondition.module.scss';

const CardCondition = (props) =>{

    const {children, variant} = props;

    return(
        <>
            <CardUI>
                <div className={`${styles.card} ${variant === "news" ? `${styles.news}` : `${styles.working}`}`}>
                    {children}
                </div>
            </CardUI>
        </>
    )
}

export default CardCondition