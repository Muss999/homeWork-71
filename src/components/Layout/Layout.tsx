import type { FC, PropsWithChildren } from "react";
import NavbarAdmin from "../Navbar/NavbarAdmin";
import NavbarUser from "../Navbar/NavbarUser";
import { useLocation } from "react-router-dom";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    const location = useLocation();
    const isAdmin = location.pathname.includes("/admin");
    return (
        <>
            <header>{isAdmin ? <NavbarAdmin /> : <NavbarUser />}</header>
            <main className="container">{children}</main>
        </>
    );
};

export default Layout;
