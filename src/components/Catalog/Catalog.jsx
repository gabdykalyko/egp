import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem/CatalogItem";
import art328 from "../../images/art328.jpeg";
import { Link } from "react-router-dom";

const Catalog = () => {
    return (
        <div className={styles.catalog}>
            <div className={styles.title} id="catalog">
                Каталог продукции
            </div>
            <div className={styles.catalogWrapper}>
                <CatalogItem
                    src={art328}
                    title={"Стакан Арт, 328"}
                    text={[
                        "Материал - Полипролен",
                        "Емкость - 180 - 200 мл",
                        "Верхний диаметр - 95 мм",
                        "Декор - Офсетная печать/Слив",
                        "Количество в коробе - 1 560 шт",
                        "Возможна комплектация платинкой и крышкой"
                    ]}
                />
                <CatalogItem
                    src={art328}
                    title={"Стакан Арт, 328"}
                    text={[
                        "Материал - Полипролен",
                        "Емкость - 180 - 200 мл",
                        "Верхний диаметр - 95 мм",
                        "Декор - Офсетная печать/Слив",
                        "Количество в коробе - 1 560 шт",
                        "Возможна комплектация платинкой и крышкой"
                    ]}
                />
                <CatalogItem
                    src={art328}
                    title={"Стакан Арт, 328"}
                    text={[
                        "Материал - Полипролен",
                        "Емкость - 180 - 200 мл",
                        "Верхний диаметр - 95 мм",
                        "Декор - Офсетная печать/Слив",
                        "Количество в коробе - 1 560 шт",
                        "Возможна комплектация платинкой и крышкой"
                    ]}
                />
            </div>
            <div className={styles.btnWrapper}>
                <Link to="/catalog" className={styles.btn}>
                    Посмотреть все
                </Link>
            </div>
        </div>
    )
}

export default Catalog;