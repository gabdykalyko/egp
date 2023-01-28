import CarouselBoxDesign from "../CarouselBox/CarouselBoxDesign/CarouselBoxDesign";
import styles from "./Design.module.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Design = () => {
    return (
        <div className={styles.design}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
                <div className={styles.title}>
                    Виды декорирования стаканчиков
                </div>
                <div>
                    <CarouselBoxDesign />
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default Design;