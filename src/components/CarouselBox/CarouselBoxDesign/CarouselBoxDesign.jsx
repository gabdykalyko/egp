import Carousel from 'react-material-ui-carousel';
import group1 from "../../../images/design/group1.jpeg";
import group2 from "../../../images/design/group2.jpeg";
import group3 from "../../../images/design/group3.jpeg";
import group4 from "../../../images/design/group4.jpeg";
import group5 from "../../../images/design/group5.jpeg";
import group6 from "../../../images/design/group6.jpeg";
import group7 from "../../../images/design/group7.jpeg";
import group8 from "../../../images/design/group8.jpeg";
import styles from "./CarouselBoxDesign.module.scss";

function Item(props) {
    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.img} style={{
                backgroundImage: `url("${props.item.img}")`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: "0% 30%"
            }}>
            </div>
        </div>
    )
}

const CarouselBoxDesign = () => {
    var items = [
        {
            img: group1
        },
        {
            img: group2
        },
        {
            img: group3
        },
        {
            img: group4
        },
        {
            img: group5
        },
        {
            img: group6
        },
        {
            img: group7
        },
        {
            img: group8
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

export default CarouselBoxDesign;