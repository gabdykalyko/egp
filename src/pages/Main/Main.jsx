import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Coworking from "../../components/Coworking/Coworking";
import Header from "../../components/Header/Header";
import Production from "../../components/Production/Production";
import styles from "./Main.module.scss"

const Main = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Coworking />
            <Production />
        </div>
    )
}

export default Main;