import './css/userName.css';
import {LogOutButton} from "../login/logOut";
import {LogInButton} from "../login/logIn";

export const UserName = ({ user }) => {

    return (
        <div className="user">
            { user ? <LogOutButton/> : <LogInButton/> }
        </div>
    )
}
