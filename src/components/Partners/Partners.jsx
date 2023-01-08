import styles from "./Partners.module.scss"
import adal from "../../images/trust/adal.png"

const Partners = () => {
    return (
        <div className={styles.trust}>
            <div className={styles.title}>
                Наши технические партнеры
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

export default Partners;