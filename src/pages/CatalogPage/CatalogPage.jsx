import Header from "../../components/Header/Header";
import styles from "./CatalogPage.module.scss";
import CatalogPageItem from "./CatalogPageItem/CatalogPageItem";
import art328 from "../../images/art328.jpeg";

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