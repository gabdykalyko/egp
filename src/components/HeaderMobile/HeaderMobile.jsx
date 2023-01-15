import styles from "./HeaderMobile.module.scss";
import menu from '../../images/menu.svg';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

const HeaderMobile = () => {
    return (
        <div className={styles.header}>
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div>
                <img className={styles.menu} src={menu} />
            </div>
        </div>
    )
}

export default HeaderMobile;