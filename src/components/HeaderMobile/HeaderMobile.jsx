import styles from "./HeaderMobile.module.scss";
import menu from '../../images/menu.svg';
import logo from '../../images/logo.svg';
import { useEffect, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';

const HeaderMobile = () => {
    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    })

    const goToLink = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className={styles.header}>
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div>
                <button
                    onClick={openMenu}
                >
                    <img
                        className={styles.menu}
                        src={menu}
                        alt="menu"
                    />
                </button>
            </div>
            {showMenu && <div className={styles.menuMob}>
                <div className={styles.menuItem}>
                    <Link
                        to="/#about"
                        onClick={goToLink}
                    >
                        О компании
                    </Link>
                </div>
                <div className={styles.menuItem}>
                    <Link
                        to="/#catalog"
                        onClick={goToLink}
                    >
                        Каталог продукции
                    </Link>
                </div>
                <div className={styles.menuItem}>
                    <Link
                        to="/career"
                        onClick={goToLink}
                    >
                        Карьера в EGP+I
                    </Link>
                </div>
            </div>}
        </div>
    )
}

export default HeaderMobile;