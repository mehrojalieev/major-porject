import { Link } from "react-router-dom"
import "./Nav.scss"

const Nav = () => {
    return (
        <nav >
            <div className="nav-wrapper container">

                <Link className="logo-link" to="/">
                    FormApp
                </Link>

                <ul className="nav-menu">
                    <li className="menu-item">
                        Templates
                        <span className="material-symbols-outlined icon">keyboard_arrow_down</span>
                    </li>
                    <li className="menu-item">
                        Templates
                        <span className="material-symbols-outlined icon">keyboard_arrow_down</span>
                    </li>
                    <li className="menu-item">
                        Templates
                        <span className="material-symbols-outlined icon">keyboard_arrow_down</span>
                    </li>
                </ul>

                <div></div>
            </div>
        </nav>
    )
}

export default Nav
