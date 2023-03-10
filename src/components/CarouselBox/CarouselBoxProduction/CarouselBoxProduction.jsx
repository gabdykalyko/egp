import Carousel from 'react-material-ui-carousel';
import prod from "../../../images/production/first.jpg";
import prod2 from "../../../images/production/second.jpg";
import prod3 from "../../../images/production/third.png";
import prod4 from "../../../images/production/fourth.jpg";
import prod5 from "../../../images/production/fifth.png";
import prod6 from "../../../images/production/sixth.png";
import styles from "./CarouselBoxProduction.module.scss";

function Item(props) {
    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.img} style={{
                backgroundImage: `url("${props.item.img}")`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`
            }}>
                <div className={styles.textWrapper}>
                    {props.item.description}
                </div>
            </div>
        </div>
    )
}

const CarouselBoxProduction = () => {
    var items = [
        {
            description: "Три термоформовочные линии производства Германия",
            img: prod
        },
        {
            description: "Производственная мощность - 20 млн стаканов в месяц/240 млн стаканов в год.",
            img: prod2
        },
        {
            description: "22 артикула диаметром 95 мм.",
            img: prod3
        },
        {
            description: "Две экструзионные линии производства Германия. Производственная мощность до 1000 тонн в месяц/ 12 000 тонн в год.",
            img: prod4
        },
        {
            description: "Восьми цветная печатная машина методом сухого офсета производство Нидерланды.",
            img: prod5
        },
        {
            description: "Производительная мощность 6 млн шт в месяц/ 72 млн шт в год.",
            img: prod6
        }
    ]

    return (
        <Carousel
            indicatorIconButtonProps={{
                style: {
                    color: "#A49590",
                    marginTop: "15px"
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: '#58BF16',
                    backgroundColor: '#58BF16',
                    marginTop: "15px"
                }
            }}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

export default CarouselBoxProduction;