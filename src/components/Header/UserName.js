import '../css/userName.css';
import {useUserAuth} from "../context/UserAuthContext";

export const UserName = () => {
    const { user } = useUserAuth();

    return <div className="user"> { user ? user.email : "Zaloguj się" } </div>
}
