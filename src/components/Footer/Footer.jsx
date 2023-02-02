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
                    <a href="https://instagram.com/egpi.kz?igshid=Zjc2ZTc4Nzk" target="_blank">
                        <img src={inst} style={{ width: "40px" }} alt="instagram" />
                    </a>
                </div>
                <div className={styles.contactsItem}>
                    <a href="https://t.me/EGPI_Almaty" target="_blank">
                        <img src={telegram} style={{ width: "40px" }} alt="instagram" />
                    </a>
                </div>
                <div>
                    <a href="https://wa.me/77077711564" target="_blank">
                        <img src={whatsapp} style={{ width: "40px" }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;