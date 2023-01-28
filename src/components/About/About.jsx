import styles from "./About.module.scss";
import lab from "../../images/lab.jpg";
import polyp from "../../images/polyp.jpg";
import cupgroup from "../../images/cupgroup.jpg";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {
    return (
        <div className={styles.about} id="about">
            <div className={styles.title}>
                О Компании
                <span className={styles.grey}> EGP</span>
                <span className={styles.green}>I</span>
            </div>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
                <div className={styles.text}>
                    ТОО «EGP+I» , является самым крупным производителем стаканов под запайку из полипропилена для молочной продукции на территории Республики Казахстан, с производственной мощностью более 200 000 000 стаканов в год.
                    Мы постоянно растем и совершенствуемся, используем современные тенденции и перенимаем опыт лучших.
                    <div className={styles.backGrey}>

                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
                <div className={styles.img}>
                    <img src={lab} alt="laboratory" />
                    <div className={styles.left}>
                        <div className={styles.lineTop}>

                        </div>
                        <div className={styles.lineBottom}>

                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.lineTop}>

                        </div>
                        <div className={styles.lineBottom}>

                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
                <div className={styles.text}>
                    При производстве продукции, мы используем только первичное сырье от сертифицированных Казахстанских производителей. При этом стакан из полипропилена абсолютно безопасен для упаковки и хранения молочной продукции.
                    <div className={styles.backGrey}>

                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
                <div className={styles.img}>
                    <img src={polyp} alt="laboratory" />
                    <div className={styles.left}>
                        <div className={styles.lineTop}>

                        </div>
                        <div className={styles.lineBottom}>

                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.lineTop}>

                        </div>
                        <div className={styles.lineBottom}>

                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
                <div className={styles.text}>
                    Дизайн стакана - это один из не маловажных факторов при выборе продукции потребителем. И наша компания готова сделать Вашу продукцию оригинальной и незабываемой.
                    Для реализации Ваших самых смелых идей, мы готовы предложить три вида декорирования продукции:
                    <br />
                    <br />
                    • Офсет/флекса печать
                    <br />
                    •	Слив этикетка
                    <br />
                    •	Картонная обечайка
                    <div className={styles.backGrey}>

                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
                <div className={styles.img}>
                    <img src={cupgroup} alt="laboratory" />
                    <div className={styles.left}>
                        <div className={styles.lineTop}>

                        </div>
                        <div className={styles.lineBottom}>

                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default About;