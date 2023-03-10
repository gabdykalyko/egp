import styles from "./Trust.module.scss";
import adal from "../../images/trust/adal.png";
import kamilka from "../../images/trust/kamilka.png";
import smil from "../../images/trust/smil.png";
import airan from "../../images/trust/airan.png";
import airant from "../../images/trust/airant.png";
import rodina from "../../images/trust/rodina.png";
import milk from "../../images/trust/milk.png";
import tekeli from "../../images/trust/tekeli.png";
import baiserke from "../../images/trust/baiserke.png";
import zhanaozen from "../../images/trust/zhanaozen.png";
import city from "../../images/trust/city.jpg";
import qarasaz from "../../images/trust/qarasaz.png";
import organic from "../../images/trust/organic.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Trust = () => {
    return (
        <div className={styles.trust}>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
                <div className={styles.title}>
                    Нам доверяют
                </div>
                <div className={styles.trustWrapper}>
                    <div className={styles.trustItem}>
                        <img src={adal} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={kamilka} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={smil} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={airan} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={airant} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={rodina} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={milk} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={tekeli} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={baiserke} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={zhanaozen} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={city} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={qarasaz} />
                    </div>
                    <div className={styles.trustItem}>
                        <img src={organic} />
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default Trust;