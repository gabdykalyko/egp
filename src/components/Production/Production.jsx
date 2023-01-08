import React from 'react';
import CarouselBoxProduction from '../CarouselBox/CarouselBoxProduction/CarouselBoxProduction';
import styles from "./Production.module.scss";

const Production = () => {
    return (
        <div className={styles.production}>
            <div className={styles.title}>
                Наше производство
            </div>
            <div>
               <CarouselBoxProduction />
            </div>
        </div>
    )
}

export default Production;