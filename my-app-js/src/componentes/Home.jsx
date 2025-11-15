import { Outlet, Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import '../../Home.css'

export function Home() {
    return <div className="container d-flex flex-column justify-content-between todo">
        <Header/>
        <div className="flex-grow-1">
            <Outlet/>
        </div>
        <Footer/>
    </div>
}
