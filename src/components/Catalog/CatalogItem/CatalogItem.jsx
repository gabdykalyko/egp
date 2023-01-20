import styles from "./CatalogItem.module.scss";

const CatalogItem = (props) => {
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
                    {props.text.map((item)=>(
                        <li key={item.key}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CatalogItem;