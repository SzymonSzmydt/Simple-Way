import './css/userName.css';
import {LogOutButton} from "../login/logOut";
import {LogInButton} from "../login/logIn";
import {useUserAuth} from "../../context/UserAuthContext";

export const UserName = () => {
    const { user } = useUserAuth();

    return (
        <div className="user">
            { user ? <LogOutButton/> : <LogInButton/> }
        </div>
    )
}
