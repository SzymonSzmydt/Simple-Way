import {useState} from "react";
import GoogleButton from 'react-google-button';
import "../css/loginWindow.css";
import {useUserAuth} from "../context/UserAuthContext";

export function LoginWindow({ setNewUser }) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const { logIn, googleSignIn } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await  logIn(email, password);
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    }
    const showError = error ? <span> {error.split('Firebase:')} </span> : "Zaloguj się";

    const handleRegisterClick = () => setNewUser(true);
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();

        try {
            await googleSignIn();
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="login-window" >
            <div className="login-title" style={{backgroundColor: error ? "#B07483" : ""}}> { showError } </div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email"> Email </label>
                <input type="email" onChange={ e => setEmail(e.target.value)} autoComplete="email" />
                <label htmlFor="password"> Hasło </label>
                <input type="password" onChange={ e => setPassword(e.target.value)} autoComplete="current-password" />
                <button className="btn btn-login" > Zaloguj </button>
            </form>
            <GoogleButton className="btn" onClick={handleGoogleSignIn} />

            <div className="login-footer">
                Nie masz konta ?
                <span className="link" onClick={handleRegisterClick}>
                    &nbsp; Zarejsestruj się!
                </span>
            </div>
        </div>
    )
}