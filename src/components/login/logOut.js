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
            <div className="symbol symbol__logout" onClick={handleLogOut}/>
            <span> { user.email } </span>
        </>

    )
}