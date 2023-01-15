import logo from '../../images/logo.svg';
import phone from '../../images/phone.svg';
import styles from "./Header.module.scss";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className={styles.nav}>
                <div className={styles.navItem}>
                    <Link to="/#about">
                        О компании
                    </Link>
                </div>
                <div className={styles.navItem}>
                    <Link to="/#catalog">
                        Каталог продукции
                    </Link>
                </div>
                <div>
                    <Link to="/career">
                        Карьера в EGP+I
                    </Link>
                </div>
            </div>
            <div className={styles.contacts}>
                <div className={styles.contactsItem}>
                    Контакты
                </div>
                <div>
                    <img src={phone} alt="phone" />
                </div>
            </div>
        </div>
    )
}

export default Header;