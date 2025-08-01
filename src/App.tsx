import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import DishesList from "./containers/DishesList/DishesList";

const App = () => {
    return (
        <Layout>
            <Routes>
                {["/", "/dishes"].map((path) => (
                    <Route path={path} element={<Home />} />
                ))}
                {["/admin", "/admin/dishes"].map((path) => (
                    <Route path={path} element={<DishesList />} />
                ))}
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </Layout>
    );
};

export default App;
