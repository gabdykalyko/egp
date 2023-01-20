import styles from "./MobileMenu.module.scss";
import { HashLink as Link } from 'react-router-hash-link';

const MobileMenu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuItem}>
                <Link to="/#about">
                    О компании
                </Link>
            </div>
            <div className={styles.menuItem}>
                <Link to="/#catalog">
                    Каталог продукции
                </Link>
            </div>
            <div className={styles.menuItem}>
                <Link to="/career">
                    Карьера в EGP+I
                </Link>
            </div>
        </div>
    )
}

export default MobileMenu;