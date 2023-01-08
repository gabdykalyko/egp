import styles from "./Trust.module.scss"
import adal from "../../images/trust/adal.png"

const Trust = () => {
    return (
        <div className={styles.trust}>
            <div className={styles.title}>
                Нам доверяют
            </div>
            <div className={styles.trustWrapper}>
                <div className={styles.trustItem}>
                    <img src={adal} />
                </div>
                <div className={styles.trustItem}>
                    <img src={adal} />
                </div>
                <div className={styles.trustItem}>
                    <img src={adal} />
                </div>
                <div className={styles.trustItem}>
                    <img src={adal} />
                </div>
                <div className={styles.trustItem}>
                    <img src={adal} />
                </div>
                <div className={styles.trustItem}>
                    <img src={adal} />
                </div>
                <div className={styles.trustItem}>
                    <img src={adal} />
                </div>
                <div className={styles.trustItem}>
                    <img src={adal} />
                </div>
                <div className={styles.trustItem}>
                    <img src={adal} />
                </div>
                <div className={styles.trustItem}>
                    <img src={adal} />
                </div>
                <div className={styles.trustItem}>
                    <img src={adal} />
                </div>
                <div className={styles.trustItem}>
                    <img src={adal} />
                </div>
            </div>
        </div>
    )
}

export default Trust;