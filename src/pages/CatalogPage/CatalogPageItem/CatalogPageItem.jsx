import { Link } from "react-router-dom";
import styles from "./CatalogPageItem.module.scss";

const CatalogPageItem = (props) => {
    return (
        <div className={styles.item}>
            <Link to={`/catalog/${props.slug}`}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={props.src} alt={props.alt} />
                </div>
                <div>
                    <div className={styles.title}>
                        {props.title}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CatalogPageItem;