import styles from "./Partners.module.scss";
import neftehim from "../../images/partners/neftehim.jpg";
import illig from "../../images/partners/illig.png";
import vandam from "../../images/partners/vandam.png";
import diamat from "../../images/partners/diamat1.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Partners = () => {
    return (
        <div className={styles.trust}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
                <div className={styles.title}>
                    Наши технические партнеры
                </div>
                <div className={styles.trustWrapper}>
                    <div className={styles.trustItem}>
                        <img src={neftehim} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={illig} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={vandam} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={diamat} />
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default Partners;