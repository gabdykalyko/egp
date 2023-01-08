import logo from '../../images/logo.svg';
import phone from '../../images/phone.svg';
import styles from "./Footer.module.scss";
import { HashLink as Link } from 'react-router-hash-link';
import inst from "../../images/inst.svg";
import telegram from "../../images/telegram.svg";
import whatsapp from "../../images/whatsapp.svg";

const Footer = () => {
    return (
        <div className={styles.header}>
            <div>
                <img src={logo} alt="logo" />
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
                    Контакты
                </div>
            </div>
            <div className={styles.contacts}>
                <div className={styles.contactsItem}>
                    <img src={inst} style={{width: "40px"}}/>
                </div>
                <div className={styles.contactsItem}>
                    <img src={telegram} style={{width: "40px"}}/>
                </div>
                <div>
                    <img src={whatsapp} style={{width: "40px"}}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;