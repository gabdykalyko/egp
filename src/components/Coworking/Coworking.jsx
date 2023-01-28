import CoworkingItem from "./CoworkingItem/CoworkingItem";
import styles from "./Coworking.module.scss";
import quality from "../../images/quality.svg";
import temp from "../../images/temp.svg";
import design from "../../images/design.svg";
import auto from "../../images/auto.svg";
import fast from "../../images/fast.svg";
import calendar from "../../images/calendar.svg";
import basket from "../../images/basket.svg";
import complect from "../../images/complect.svg";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Coworking = () => {
    return (
        <div className={styles.coworking}>
            <div className={styles.title}>
                Что вы получите при сотрудничестве с нами
            </div>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
                <div className={styles.coworkingWrapper}>
                    <CoworkingItem src={fast} alt={'clock'} text={"Быстрые сроки исполнения заказов - от 14 дней"} />
                    <CoworkingItem src={calendar} alt={'guarantee'} text={"Мы даем гарантию на наши изделия на срок 180 дней"} />
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
                <div className={styles.coworkingWrapper}>
                    <CoworkingItem src={basket} alt={'clock'} text={"Большой ассортимент предлагаемых изделий"} />
                    <CoworkingItem src={quality} alt={'guarantee'} text={"Отличное соотношение цены и качества"} />
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
                <div className={styles.coworkingWrapper}>
                    <CoworkingItem src={temp} alt={'temp'} text={"Наши изделия устойчивы к высоким и низким температурам"} />
                    <CoworkingItem src={design} alt={'design'} text={"Разработка индивидуального дизайна"} />
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
                <div className={styles.coworkingWrapper}>
                    <CoworkingItem src={auto} alt={'auto'} text={"Наши изделия идеально подходят под автоматические линии розлива и запайки продукции"} />
                    <CoworkingItem src={complect} alt={'set'} text={"По запросу, мы укомплектуем стаканы крышкой и платинкой"} />
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default Coworking;