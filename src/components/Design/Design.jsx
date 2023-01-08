import CarouselBoxDesign from "../CarouselBox/CarouselBoxDesign/CarouselBoxDesign";
import styles from "./Design.module.scss";

const Design = () => {
    return (
        <div className={styles.design}>
            <div className={styles.title}>
                Виды декорирования стаканчиков
            </div>
            <div>
               <CarouselBoxDesign />
            </div>
        </div>
    )
}

export default Design;