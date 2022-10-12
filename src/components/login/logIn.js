import {useNavigate} from 'react-router-dom';

export const LogInButton = () => {
    const navigate = useNavigate();

    const handleLogOut = async () => {
        navigate("/login");
    }

    return (
        <>
            <span className="material-symbols-outlined logout" onClick={handleLogOut}> login </span>
            <span className="login" onClick={handleLogOut}> Zaloguj się </span>
        </>

    )
}