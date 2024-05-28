import { Outlet } from "react-router-dom"
import Nav from "../compoments/Header";
import Footer from "../compoments/Footer";

export default function Base()
{
    return(
        <div className="container">
            <Nav />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}