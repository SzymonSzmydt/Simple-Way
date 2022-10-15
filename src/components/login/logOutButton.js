import {useUserAuth} from "../../context/UserAuthContext";
import {useNavigate} from 'react-router-dom';
import "./css/logOut.css";

export const LogOutButton = () => {
    const navigate = useNavigate();
    const { user, logOut } = useUserAuth();
    let name = user ? user.email : false;
    let indexOfMonkey = name ? name.indexOf('@') : null;

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
            <div className="symbol symbol__logout" onClick={handleLogOut}/>
            <span className="LogOut__user-email"> { name ? name.slice(0, indexOfMonkey) : null } </span>
        </>

    )
}