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
import { useState } from "react";
import art315f from "../../images/catalog/art315f.jpeg";
import art395 from "../../images/catalog/art395.jpeg";
import art366 from "../../images/catalog/art366.jpg";
import art365 from "../../images/catalog/art365.jpeg";
import art399 from "../../images/catalog/art399.jpeg";
import art394 from "../../images/catalog/art394.png";
import art309 from "../../images/catalog/art309.jpeg";
import art1200 from "../../images/catalog/art1200.png";
import art3072 from "../../images/catalog/art3072.jpeg";
import art303 from "../../images/catalog/art303.png";
import art329 from "../../images/catalog/art329.jpeg";
import art397 from "../../images/catalog/art397.jpg";
import art374 from "../../images/catalog/art374.png";
import art370 from "../../images/catalog/art370.jpeg";
import art320 from "../../images/catalog/art320.jpeg";
import art378 from "../../images/catalog/art378.jpeg";
import art306 from "../../images/catalog/art306.jpeg";
import art3062 from "../../images/catalog/art3062.jpeg";

const catalogItems = {
    art315f: {
        src: art315f,
        title: "Стакан Арт, 315F",
        slug: 'art315f',
        text: [
            "Материал - Полипролен",
            "Емкость - 300 – 340 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Картонная обечайка",
            "Количество в коробе - 552 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art393: {
        src: art393,
        title: "Стакан Арт, 393",
        slug: 'art393',
        text: [
            "Материал - Полипролен",
            "Емкость - 180 -200 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Картонная обечайка",
            "Количество в коробе - 1 080 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art395: {
        src: art395,
        title: "Стакан Арт, 395",
        slug: 'art395',
        text: [
            "Материал - Полипролен",
            "Емкость - 250 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Картонная обечайка",
            "Количество в коробе - 888 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art369: {
        src: art369,
        title: "Стакан Арт, 369",
        slug: 'art369',
        text: [
            "Материал - Полипролен",
            "Емкость - 300 - 350 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Картонная обечайка",
            "Количество в коробе - 1 104 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art366: {
        src: art366,
        title: "Стакан Арт, 366",
        slug: 'art366',
        text: [
            "Материал - Полипролен",
            "Емкость - 380 - 400 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Картонная обечайка",
            "Количество в коробе - 600 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art365: {
        src: art365,
        title: "Стакан Арт, 365",
        slug: 'art365',
        text: [
            "Материал - Полипролен",
            "Емкость - 400 - 450 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Картонная обечайка",
            "Количество в коробе - 672 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art399: {
        src: art399,
        title: "Стакан Арт, 399",
        slug: 'art399',
        text: [
            "Материал - Полипролен",
            "Емкость - 350 - 380 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Картонная обечайка",
            "Количество в коробе - 960 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art394: {
        src: art394,
        title: "Стакан Арт, 394",
        slug: 'art394',
        text: [
            "Материал - Полипролен",
            "Емкость - 350 - 380 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Картонная обечайка",
            "Количество в коробе - 480 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art309: {
        src: art309,
        title: "Стакан Арт, 309",
        slug: 'art309',
        text: [
            "Материал - Полипролен",
            "Емкость - 150 -170мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 800 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art1200: {
        src: art1200,
        title: "Стакан Арт, 1200",
        slug: 'art1200',
        text: [
            "Материал - Полипролен",
            "Емкость - 180 - 200 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 800 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
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
    art3072: {
        src: art3072,
        title: "Стакан Арт, 3072",
        slug: 'art3072',
        text: [
            "Материал - Полипролен",
            "Емкость - 200 - 220 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 152 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art303: {
        src: art303,
        title: "Стакан Арт, 303",
        slug: 'art303',
        text: [
            "Материал - Полипролен",
            "Емкость - 250 - 270 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 680 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art329: {
        src: art329,
        title: "Стакан Арт, 329",
        slug: 'art329',
        text: [
            "Материал - Полипролен",
            "Емкость - 220 - 250 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 080 шт",
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
    art397: {
        src: art397,
        title: "Стакан Арт, 397",
        slug: 'art397',
        text: [
            "Материал - Полипролен",
            "Емкость - 350-370 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 152 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art315: {
        src: art315,
        title: "Стакан Арт, 315",
        slug: 'art315',
        text: [
            "Материал - Полипролен",
            "Емкость - 400 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 552 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art374: {
        src: art374,
        title: "Стакан Арт, 374",
        slug: 'art374',
        text: [
            "Материал - Полипролен",
            "Емкость - 400 - 420мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 008 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art370: {
        src: art370,
        title: "Стакан Арт, 370",
        slug: 'art370',
        text: [
            "Материал - Полипролен",
            "Емкость - 400 - 420мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 936 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art320: {
        src: art320,
        title: "Стакан Арт, 320",
        slug: 'art320',
        text: [
            "Материал - Полипролен",
            "Емкость - 400 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 768 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art378: {
        src: art378,
        title: "Стакан Арт, 378",
        slug: 'art378',
        text: [
            "Материал - Полипролен",
            "Емкость - 420 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 1 008 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art306: {
        src: art306,
        title: "Стакан Арт, 306",
        slug: 'art306',
        text: [
            "Материал - Полипролен",
            "Емкость - 500 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 960 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
    art3062: {
        src: art3062,
        title: "Стакан Арт, 3062",
        slug: 'art3062',
        text: [
            "Материал - Полипролен",
            "Емкость - 500 мл",
            "Верхний диаметр - 95 мм",
            "Декор - Офсетная печать/Слив",
            "Количество в коробе - 792 шт",
            "Возможна комплектация платинкой и крышкой"
        ]
    },
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