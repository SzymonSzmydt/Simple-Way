import {useState} from "react";
import "../css/loginWindow.css";
import {useUserAuth} from "../context/UserAuthContext";

export function RegisterWindow({ setNewUser }) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const { logIn } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password.length > 7) {
            try {
                await logIn(email, password);
            } catch (err) {
                console.log(err);
                setError(err.message);
            }
        }
        else {
            setError("Hasło musi posiadać więcej niż 6 znaków");
        }
    }

    const handleRegisterClick = () => setNewUser(false);
    const showError = error ? <span> {error.split('Firebase:')} </span> : "Zaloguj się";


    return (
        <div className="login-window" >
            <div className="login-title" style={{backgroundColor: error ? "#B07483" : ""}}> { showError } </div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email"> Email </label>
                <input type="email" onChange={ e => setEmail(e.target.value)} autoComplete="email" />
                <label htmlFor="password"> Hasło </label>
                <input type="password" onChange={ e => setPassword(e.target.value)} autoComplete="new-password" />
                <button className="btn btn-login" > Zarejestruj się </button>
            </form>

            <div className="login-footer">
                Masz konto ?
                <span className="link" onClick={handleRegisterClick}>
                    Zaloguj się!
                </span>
            </div>
        </div>
    )
}