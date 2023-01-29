import Header from "../../components/Header/Header";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import styles from "./CatalogPage.module.scss";
import CatalogPageItem from "./CatalogPageItem/CatalogPageItem";
import art315f from "../../images/catalog/art315f.jpeg";
import art328 from "../../images/catalog/art328.jpeg";
import art369 from "../../images/catalog/art369.jpeg";
import art377 from "../../images/catalog/art377.jpeg";
import art393 from "../../images/catalog/art393.jpeg";
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
import art315 from "../../images/catalog/art315.jpeg";
import art374 from "../../images/catalog/art374.png";
import art370 from "../../images/catalog/art370.jpeg";
import art320 from "../../images/catalog/art320.jpeg";
import art378 from "../../images/catalog/art378.jpeg";
import art306 from "../../images/catalog/art306.jpeg";
import art3062 from "../../images/catalog/art3062.jpeg";
import Footer from "../../components/Footer/Footer";

const catalogItems = [
    {
        src: art315f,
        title: "Стакан Арт, 315F",
        slug: 'art315f',
    },
    {
        src: art393,
        title: "Стакан Арт, 393",
        slug: 'art393',
    },
    {
        src: art395,
        title: "Стакан Арт, 395",
        slug: 'art395',
    },
    {
        src: art369,
        title: "Стакан Арт, 369",
        slug: 'art369',
    },
    {
        src: art366,
        title: "Стакан Арт, 366",
        slug: 'art366',
    },
    {
        src: art365,
        title: "Стакан Арт, 365",
        slug: 'art365',
    },
    {
        src: art399,
        title: "Стакан Арт, 399",
        slug: 'art399',
    },
    {
        src: art394,
        title: "Стакан Арт, 394",
        slug: 'art394',
    },
    {
        src: art309,
        title: "Стакан Арт, 309",
        slug: 'art309',
    },
    {
        src: art1200,
        title: "Стакан Арт, 1200",
        slug: 'art1200',
    },
    {
        src: art328,
        title: "Стакан Арт, 328",
        slug: 'art328',
    },
    {
        src: art3072,
        title: "Стакан Арт, 3072",
        slug: 'art3072',
    },
    {
        src: art303,
        title: "Стакан Арт, 303",
        slug: 'art303',
    },
    {
        src: art329,
        title: "Стакан Арт, 329",
        slug: 'art329',
    },
    {
        src: art377,
        title: "Стакан Арт, 377",
        slug: 'art377',
    },
    {
        src: art397,
        title: "Стакан Арт, 397",
        slug: 'art397',
    },
    {
        src: art315,
        title: "Стакан Арт, 315",
        slug: 'art315',
    },
    {
        src: art374,
        title: "Стакан Арт, 374",
        slug: 'art374',
    },
    {
        src: art370,
        title: "Стакан Арт, 370",
        slug: 'art370',
    },
    {
        src: art320,
        title: "Стакан Арт, 320",
        slug: 'art320',
    },
    {
        src: art378,
        title: "Стакан Арт, 378",
        slug: 'art378',
    },
    {
        src: art306,
        title: "Стакан Арт, 306",
        slug: 'art306',
    },
    {
        src: art3062,
        title: "Стакан Арт, 3062",
        slug: 'art3062',
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
                        slug={item.slug}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default CatalogPage;