import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Catalog from "../../components/Catalog/Catalog";
import Coworking from "../../components/Coworking/Coworking";
import Design from "../../components/Design/Design";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Partners from "../../components/Partners/Partners";
import Production from "../../components/Production/Production";
import Trust from "../../components/Trust/Trust";

const Main = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Coworking />
            <Production />
            <Catalog />
            <Design />
            <Trust />
            <Partners />
            <Footer />
        </div>
    )
}

export default Main;