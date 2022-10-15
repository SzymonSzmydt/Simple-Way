import './css/userName.css';
import {LogOutButton} from "../login/logOutButton";
import {LogInButton} from "../login/logInButton";

export const UserName = ({ user }) => {

    return (
        <div className="user">
            { user ? <LogOutButton/> : <LogInButton/> }
        </div>
    )
}
