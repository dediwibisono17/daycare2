import styles from './CardUI.module.scss';

const CardUI = (props) =>{

    const {children, variant} = props;

    return(
        //<div className={`${styles.card} ${variant === "news" ? `${styles.news}` : `${styles.working}`}`}>
        <div className={styles['card']}>
            {children}
        </div>
    )
}

export default CardUI