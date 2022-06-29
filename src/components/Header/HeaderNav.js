import "./css/header-nav.css";
import {Link} from "react-router-dom";

export function HeaderNav() {

    return (
        <div className="header__nav">
            <Link to="/Home" className="header__nav-link">
                POCZĄTEK
            </Link>
            <Link to="/application" className="header__nav-link">
                ZACZNIJ EWIDENCJĘ
            </Link>
        </div>
    )
}