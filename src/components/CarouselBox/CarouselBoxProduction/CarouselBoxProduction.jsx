import Carousel from 'react-material-ui-carousel';
import prod from "../../../images/prod.png";
import prod2 from "../../../images/prod2.jpg";
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
                    Собственные немецкие экструзионные линии
                </div>
            </div>
        </div>
    )
}

const CarouselBoxProduction = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: prod
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: prod2
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: prod2
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: prod2
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