import '../css/userName.css';
import {useUserAuth} from "../context/UserAuthContext";
import {LogOutButton} from "../login/logOut";

export const UserName = () => {
    const { user } = useUserAuth();


    return (
        <div className="user">
            { user && <LogOutButton/> }
            { user ? user.email : "Zaloguj się" }
        </div>
    )
}
