import styles from "./CupPage.module.scss";
import art328 from "../../images/catalog/art328.jpeg";
import art369 from "../../images/catalog/art369.jpeg";
import art377 from "../../images/catalog/art377.jpeg";
import art393 from "../../images/catalog/art393.jpeg";
import art315 from "../../images/catalog/art315.jpeg";
import cupGroup from "../../images/cupgroup.jpg"
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from "react";

const catalogItems = {
    art328: {
        src: art328,
        title: "Стакан Арт, 328",
        slug: 'art328',
        text: [
            "Материал - Полипролен",
            "Емкость - 180 - 200 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 560 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art377: {
        src: art377,
        title: "Стакан Арт, 377",
        slug: 'art377',
        text: [
            "Материал - Полипролен",
            "Емкость - 320 - 350 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 080 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art393: {
        src: art393,
        title: "Стакан Арт, 393",
        slug: 'art393',
        text: [
            "Материал - Полипролен",
            "Емкость - 180 - 200 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Картонная обечайка",
            "Количество в коробе - 1080 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art315: {
        src: art315,
        title: "Стакан Арт, 328",
        slug: 'art328',
        text: [
            "Материал - Полипролен",
            "Емкость - 400 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 552 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art369: {
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
    }
}

const CupPage = () => {
    const params = useParams()
    const [showPopup, setShowPopup] = useState(false)

    const btn = () => {
        window.location.href = "#popup:marquiz_63d4075f2b5eb7004f2c9963"
        window.location.reload()
    }

    const close = () => {
        setShowPopup(false)
    }

    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <HeaderMobile />
            <div className={styles.main}>
                <div className={styles.wrapper}>
                    <div>
                        <img
                            src={catalogItems[params.item].src}
                            alt={catalogItems[params.item].title}
                            className={styles.img}
                        />
                    </div>
                    <div>
                        <div className={styles.title}>
                            {catalogItems[params.item].title}
                        </div>
                        {catalogItems[params.item].text.map((e) => (
                            <div className={styles.item}>
                                {e}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {showPopup &&
                <div className={styles.popup}>
                    <div>
                        <img src={cupGroup} alt="cupGroup" />
                    </div>
                    <div className={styles.text}>
                        Рассчитайте стоимость поставки стаканов ответив на несколько вопросов
                    </div>
                    <div className={styles.btn}>
                        <button
                            onClick={btn}
                            className={styles.btnMain}
                        >
                            Рассчитать стоимость
                        </button>
                    </div>
                    <div>
                        <button
                            className={styles.close}
                            onClick={close}
                        >
                            x
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default CupPage;