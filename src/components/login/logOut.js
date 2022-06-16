import {useUserAuth} from "../context/UserAuthContext";
import "../css/logOut.css";

export const LogOutButton = () => {
    const { user, logOut } = useUserAuth();

    const handleLogOut = async () => {
        try {

        } catch (err) {
            console.log(err);
        }
    }

    return <span className="material-symbols-outlined logout"> logout </span>
}