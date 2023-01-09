import styles from "./CatalogPageItem.module.scss";

const CatalogPageItem = (props) => {
    return (
            <div className={styles.item}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={props.src} alt={props.alt} />
                </div>
                <div>
                    <div className={styles.title}>
                        {props.title}
                    </div>
                    <ul className={styles.list}>
                        {props.text.map((item) => (
                            <li>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    )
}

export default CatalogPageItem;