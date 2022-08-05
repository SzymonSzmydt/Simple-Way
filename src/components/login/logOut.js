import {useUserAuth} from "../../context/UserAuthContext";
import {useNavigate} from 'react-router-dom';
import "./css/logOut.css";

export const LogOutButton = () => {
    const navigate = useNavigate();
    const { user, logOut } = useUserAuth();

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate("/", { replace: true });
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <span className="material-symbols-outlined logout" onClick={handleLogOut}> logout </span>
            <span className="user-email"> { user.email } </span>
        </>

    )
}