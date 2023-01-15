import Header from "../../components/Header/Header";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import styles from "./CatalogPage.module.scss";
import CatalogPageItem from "./CatalogPageItem/CatalogPageItem";
import art328 from "../../images/catalog/art328.jpeg";
import art369 from "../../images/catalog/art369.jpeg";
import art377 from "../../images/catalog/art377.jpeg";
import art393 from "../../images/catalog/art393.jpeg";
import art315 from "../../images/catalog/art315.jpeg";

const catalogItems = [
    {
        src: art328,
        title: "Стакан Арт, 328",
        text: [
            "Материал - Полипролен",
            "Емкость - 180 - 200 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 560 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    {
        src: art377,
        title: "Стакан Арт, 377",
        text: [
            "Материал - Полипролен",
            "Емкость - 320 - 350 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 080 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    {
        src: art393,
        title: "Стакан Арт, 393",
        text: [
            "Материал - Полипролен",
            "Емкость - 180 - 200 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Картонная обечайка",
            "Количество в коробе - 1080 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    {
        src: art315,
        title: "Стакан Арт, 328",
        text: [
            "Материал - Полипролен",
            "Емкость - 400 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 552 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    {
        src: art369,
        title: "Стакан Арт, 328",
        text: [
            "Материал - Полипролен",
            "Емкость - 300 - 350 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Картонная обечайка",
            "Количество в коробе - 1 104 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    {
        src: art328,
        title: "Стакан Арт, 328",
        text: [
            "Материал - Полипролен",
            "Емкость - 180 - 200 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 560 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
]

const CatalogPage = () => {
    return (
        <div className={styles.catalog}>
            <Header />
            <HeaderMobile />
            <div className={styles.catalogWrapper}>
                {catalogItems.map((item) => (
                    <CatalogPageItem
                        src={item.src}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default CatalogPage;