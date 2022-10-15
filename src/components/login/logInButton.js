import {useNavigate} from 'react-router-dom';

export const LogInButton = () => {
    const navigate = useNavigate();

    const handleLogOut = async () => {
        navigate("/login");
    }

    return (
        <>
            <div className="symbol symbol__login" onClick={handleLogOut}/>
            <span className="login" onClick={handleLogOut}> Zaloguj się </span>
        </>
    )
}