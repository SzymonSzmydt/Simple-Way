import {useLocation, useNavigate} from 'react-router-dom';

import "./css/general.css";
import {UserNameInfo} from "./UserNameInfo";

export function General() {
    const location = useLocation();
    const navigation = useNavigate();

    const { username, surname, address, postcode, city} = location.state["myUser"];

    return (
        <div className="mainApp-row general">
            <div className="mainCompany">
                <header className="mainCompany-header">
                    <UserNameInfo username={username} surname={surname}/>
                </header>
                <div className="mainCompany-container">


                </div>
            </div>
        </div>
    )
}