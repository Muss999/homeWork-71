import { Link } from "react-router-dom";

const NavbarUser = () => {
    return (
        <nav className="navbar bg-warning mb-3" data-bs-theme="light">
            <div className="container d-f justify-content-between">
                <Link to={"/"} className="navbar-brand">
                    Turtle Pizza
                </Link>
            </div>
        </nav>
    );
};

export default NavbarUser;
