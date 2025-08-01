import type { FC, PropsWithChildren } from "react";
import NavbarAdmin from "../Navbar/NavbarAdmin";
import { useParams } from "react-router-dom";
import NavbarUser from "../Navbar/NavbarUser";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    const { admin } = useParams();
    return (
        <>
            <header>{admin ? <NavbarAdmin /> : <NavbarUser />}</header>
            <main className="container">{children}</main>
        </>
    );
};

export default Layout;
