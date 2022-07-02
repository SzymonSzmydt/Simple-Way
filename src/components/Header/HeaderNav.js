import "./css/header-nav.css";
import {Link} from "react-router-dom";

export function HeaderNav() {

    return (
        <div className="header__nav">
            <Link to="/Home" className="header__nav-link">
                <span className="material-symbols-outlined icon">home</span>
            </Link>
            <Link to="/application" className="header__nav-link">
                <span className="material-symbols-outlined icon">app_registration</span>
            </Link>
        </div>
    )
}