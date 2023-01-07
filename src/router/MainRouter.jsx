import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Main from "../pages/Main/Main";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Main />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default MainRouter;