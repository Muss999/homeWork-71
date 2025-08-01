import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import DishesList from "./containers/DishesList/DishesList";
import AddDish from "./containers/AddDish/AddDish";
import EditDish from "./containers/EditDish/EditDish";

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
                <Route path="/admin/dishes/new" element={<AddDish />} />
                <Route path="/admin/dishes/:id/edit" element={<EditDish />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </Layout>
    );
};

export default App;
