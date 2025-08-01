import { Link } from "react-router-dom";

const NavbarAdmin = () => {
    return (
        <nav className="navbar bg-warning mb-3" data-bs-theme="light">
            <div className="container d-flex justify-content-between">
                <Link to={"/admin/dishes"} className="navbar-brand">
                    Turtle Pizza Admin
                </Link>
                <div className="d-flex gap-4">
                    <Link to={"/admin/dishes"} className="btn btn-light">
                        Dishes
                    </Link>
                    <Link to={"/admin/orders"} className="btn btn-light">
                        Orders
                    </Link>
                </div>
                <div className="d-flex gap-4">
                    <Link to={"/admin/dishes/new"} className="btn btn-light">
                        Add new dish
                    </Link>
                    <Link to={"/"} className="btn btn-primary">
                        User Panel
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavbarAdmin;
