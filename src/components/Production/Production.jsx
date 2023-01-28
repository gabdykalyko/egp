import React from 'react';
import CarouselBoxProduction from '../CarouselBox/CarouselBoxProduction/CarouselBoxProduction';
import styles from "./Production.module.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Production = () => {
    return (
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
            <div className={styles.production}>
                <div className={styles.title}>
                    Наше производство
                </div>



                <div>
                    <CarouselBoxProduction />
                </div>
            </div>
        </AnimationOnScroll>
    )
}

export default Production;