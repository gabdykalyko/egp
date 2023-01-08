import CoworkingItem from "../../CoworkingItem/CoworkingItem";
import styles from "./Coworking.module.scss";
import clock from "../../images/clock.svg";
import guarantee from "../../images/guarantee.svg";
import complect from "../../images/complect.svg";
import quality from "../../images/quality.svg";
import temp from "../../images/temp.svg";
import design from "../../images/design.svg";
import auto from "../../images/auto.svg";
import set from "../../images/set.svg";

const Coworking = () => {
    return (
        <div className={styles.coworking}>
            <div className={styles.title}>
                Что вы получите при сотрудничестве с нами
            </div>
            <div className={styles.coworkingWrapper}>
                <CoworkingItem src={clock} alt={'clock'} text={"Быстрые сроки исполнения заказов - от 14 дней"} />
                <CoworkingItem src={guarantee} alt={'guarantee'} text={"Мы даем гарантию на наши изделия на срок 180 дней"} />
            </div>
            <div className={styles.coworkingWrapper}>
                <CoworkingItem src={complect} alt={'clock'} text={"Большой ассортимент предлагаемых изделий"} />
                <CoworkingItem src={quality} alt={'guarantee'} text={"Отличное соотношение цены и качества"} />
            </div>
            <div className={styles.coworkingWrapper}>
                <CoworkingItem src={temp} alt={'temp'} text={"Наши изделия устойчивы к высоким и низким температурам"} />
                <CoworkingItem src={design} alt={'design'} text={"Разработка индивидуального дизайна"} />
            </div>
            <div className={styles.coworkingWrapper}>
                <CoworkingItem src={auto} alt={'auto'} text={"Наши изделия идеально подходят под автоматические линии розлива и запайки продукции"} />
                <CoworkingItem src={set} alt={'set'} text={"Мы можем комплектовать наши стаканы платинкой и крышкой"} />
            </div>
        </div>
    )
}

export default Coworking;