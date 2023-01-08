import styles from "./CoworkingItem.module.scss"

const CoworkingItem = (props) => {
    return(
        <div className={styles.item}>
            <div>
                <img className={styles.img} src={props.src} alt={props.alt} />
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )
}

export default CoworkingItem;