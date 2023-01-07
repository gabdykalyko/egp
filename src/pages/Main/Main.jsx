import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Coworking from "../../components/Coworking/Coworking";
import Header from "../../components/Header/Header";
import styles from "./Main.module.scss"

const Main = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Coworking />
        </div>
    )
}

export default Main;