import "./css/header-nav.css";
import {Link} from "react-router-dom";

export function HeaderNav() {

    return (
        <div className="header__nav">
            <Link to="/" className="header__nav-link">
                <div className="symbol symbol__home"/>
            </Link>
            <Link to="/application" className="header__nav-link">
                <div className="symbol symbol__app_registration"/>
                <span className="header_nav-name">Rejestr</span>
            </Link>
        </div>
    )
}