import Social from "../Social/Social";
import styles from "./Banner.module.scss";
import cup from "../../images/cup.png";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.feel}>
                Feel nature
            </div>
            <div className={styles.text}>
                Казахстанский <br />
                производитель стаканов <br />
                под запайку для молочной <br />
                продукции
            </div>
            <Social />
            <div className={styles.topLineWrapper}>
                <div className={styles.topLine}>

                </div>
                <div className={styles.topLeftLine}>

                </div>
            </div>
            <div className={styles.bottomLineWrapper}>
                <div className={styles.bottomLeftLine}>

                </div>
                <div className={styles.bottomLine}>

                </div>
            </div>
            <div className={styles.cupWrapper}>
                <div className={styles.cup}>
                    <img src={cup}/>
                </div>
            </div>
            <div className={styles.bottomRightWrapper}>
                <div className={styles.bottomTopRight}>

                </div>
                <div className={styles.bottomRight}>

                </div>
            </div>
        </div>
    )
}

export default Banner;