import logo from '../../images/logo.svg';
import phone from '../../images/phone.svg';
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.nav}>
                <div className={styles.navItem}>
                    О компании
                </div>
                <div className={styles.navItem}>
                    Каталог продукции
                </div>
                <div>
                    Карьера в EGP+I
                </div>
            </div>
            <div className={styles.contacts}>
                <div className={styles.contactsItem}>
                    Контакты
                </div>
                <div>
                    <img src={phone} alt="phone"/>
                </div>
            </div>
        </div>
    )
}

export default Header;