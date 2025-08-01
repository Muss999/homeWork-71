import { Link } from "react-router-dom";

const NavbarAdmin = () => {
    return (
        <nav className="navbar bg-secondary mb-3" data-bs-theme="dark">
            <div className="container d-f justify-content-between">
                <Link to={"/"} className="navbar-brand">
                    Turtle Pizza Admin
                </Link>
                <Link to={"/admin/dishes"} className="btn btn-light">
                    Add new contact
                </Link>
            </div>
        </nav>
    );
};

export default NavbarAdmin;
