import styles from "./Social.module.scss";
import inst from "../../images/inst.svg";
import telegram from "../../images/telegram.svg";
import whatsapp from "../../images/whatsapp.svg";

const Social = () => {
    return (
        <div className={styles.social}>
            <div className={styles.socialItem}>
                <img src={inst} />
            </div>
            <div className={styles.socialItem}>
                <img src={telegram} />
            </div>
            <div>
                <img src={whatsapp} />
            </div>
        </div>
    )
}

export default Social;