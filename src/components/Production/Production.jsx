import React from 'react';
import CarouselBox from '../CarouselBox/CarouselBox';
import styles from "./Production.module.scss";

const Production = () => {
    return (
        <div className={styles.production}>
            <div className={styles.title}>
                Наше производство
            </div>
            <div>
               <CarouselBox />
            </div>
        </div>
    )
}

export default Production;