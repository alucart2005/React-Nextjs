import { Link } from "react-router-dom"
export function Header() {
    return <div>
        <ul className="nav-list">
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/productos"> productos </Link></li>
            <li><Link to="/clientes"> clientes </Link></li>
            <li><Link to="/provedores"> clientes </Link></li>
        </ul>
    </div>

}