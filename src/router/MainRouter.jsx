import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import Main from "../pages/Main/Main";

const MainRouter = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Layout>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/catalog' element={<CatalogPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default MainRouter;