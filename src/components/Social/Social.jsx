import styles from "./Social.module.scss";
import inst from "../../images/inst.svg";
import telegram from "../../images/telegram.svg";
import whatsapp from "../../images/whatsapp.svg";
import { Link } from "react-router-dom";

const Social = () => {
    return (
        <div className={styles.social}>
            <div className={styles.socialItem}>
                <a href="https://instagram.com/egpi.kz?igshid=Zjc2ZTc4Nzk" target="_blank">
                    <img src={inst} alt="instagram" />
                </a>
            </div>
            <div className={styles.socialItem}>
                <a href="https://t.me/EGPI_Almaty" target="_blank">
                    <img src={telegram} alt="instagram" />
                </a>
            </div>
            <div>
                <a href="https://wa.me/77077711564" target="_blank">
                    <img src={whatsapp} alt="whatsapp" />
                </a>
            </div>
        </div>
    )
}

export default Social;