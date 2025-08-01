import { Link } from "react-router-dom";

const NavbarUser = () => {
    return (
        <nav className="navbar bg-secondary mb-3" data-bs-theme="dark">
            <div className="container d-f justify-content-between">
                <Link to={"/"} className="navbar-brand">
                    Turtle Pizza
                </Link>
            </div>
        </nav>
    );
};

export default NavbarUser;
