import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem/CatalogItem";
import art328 from "../../images/catalog/art328.jpeg";
import art377 from "../../images/catalog/art377.jpeg";
import art393 from "../../images/catalog/art393.jpeg";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Catalog = () => {
    return (
        <div className={styles.catalog}>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
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
                        src={art377}
                        title={"Стакан Арт, 377"}
                        text={[
                            "Материал - Полипролен",
                            "Емкость - 320 - 350 мл",
                            "Верхний диаметр - 95 мм",
                            "Декор - Офсетная печать/Слив",
                            "Количество в коробе - 1 080 шт",
                            "Возможна комплектация платинкой и крышкой"
                        ]}
                    />
                    <CatalogItem
                        src={art393}
                        title={"Стакан Арт, 393"}
                        text={[
                            "Материал - Полипролен",
                            "Емкость - 180 - 200 мл",
                            "Верхний диаметр - 95 мм",
                            "Декор - Картонная обечайка",
                            "Количество в коробе - 1080 шт",
                            "Возможна комплектация платинкой и крышкой"
                        ]}
                    />
                </div>
                <div className={styles.btnWrapper}>
                    <Link to="/catalog" className={styles.btn}>
                        Посмотреть все
                    </Link>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default Catalog;