import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CareerPage from "../pages/CareerPage/CareerPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import CupPage from "../pages/CupPage/CupPage";
import Main from "../pages/Main/Main";

const MainRouter = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Layout>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/catalog' element={<CatalogPage />} />
                    <Route path='/career' element={<CareerPage />} />
                    <Route path='/catalog/:item' element={<CupPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default MainRouter;