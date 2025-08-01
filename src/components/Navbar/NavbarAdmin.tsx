import { Link } from "react-router-dom";

const NavbarAdmin = () => {
    return (
        <nav className="navbar bg-secondary mb-3" data-bs-theme="dark">
            <div className="container d-flex justify-content-between">
                <Link to={"/admin/dishes"} className="navbar-brand">
                    Turtle Pizza Admin
                </Link>
                <div className="d-flex gap-4">
                    <Link to={"/admin/dishes/add"} className="btn btn-light">
                        Add new contact
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
