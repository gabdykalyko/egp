import styles from "./About.module.scss";
import lab from "../../images/lab.jpg";
import polyp from "../../images/polyp.jpg";
import cupgroup from "../../images/cupgroup.jpg";

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.title}>
                О Компании
                <span className={styles.grey}> EGP</span>
                <span className={styles.green}>I</span>
            </div>

            <div className={styles.text}>
                Компания EGP+I является самым крупным производителем полипропиленовых стаканов в Казахстане, с производственной мощностью более 200 млн изделий в год. Изо дня в день мы усовершенствуем наши технические возможности, производственные операции, а также следуем современным тенденциям в мире переработки пластика, улучшая качество выпускаемой продукции.
                <div className={styles.backGrey}>

                </div>
            </div>
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

            <div className={styles.text}>
                Работа исключительно с первичным полипропиленом позволяет гарантировать нашим Партнерам абсолютную безопасность контакта упаковки с пищевыми продуктами, так как используемые в нашем производстве материалы не вступают в химическую связь с содержимым.
                <div className={styles.backGrey}>

                </div>
            </div>
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

            <div className={styles.text}>
                «Встречают по одежке» - поэтому мы имеем возможность поставлять нашим Партнерам упаковку со всеми тремя существующими видами декорирования стаканов под запайку. Большая палитра европейских красок позволяет нам изготавливать яркую упаковку, которую сложно не заметить на полке магазина.
                А собственное конструкторское бюро позволяет нам разрабатывать индивидуальную упаковку под ваши нужды, абсолютно разных форм.
                <div className={styles.backGrey}>

                </div>
            </div>
            <div className={styles.img}>
                <img src={cupgroup} alt="laboratory" />
                <div className={styles.left}>
                    <div className={styles.lineTop}>

                    </div>
                    <div className={styles.lineBottom}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;