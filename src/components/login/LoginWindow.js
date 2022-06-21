import "./css/loginWindow.css";
import {useState} from "react";
import GoogleButton from 'react-google-button';
import {useUserAuth} from "../../context/UserAuthContext";
import {useNavigate, Link} from 'react-router-dom';
import {BigButton} from "../button/BigButton";

export function LoginWindow() {
    const navigate = useNavigate();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const { logIn, googleSignIn } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await  logIn(email, password);
            navigate("/application", { replace: true });
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await googleSignIn();
            navigate("/application", { replace: true });
        } catch (err) {
            console.log(err);
            setError(err.message)
        }
    }

    const showError = error ? <span> {error.split('Firebase:')} </span> : "Zaloguj się";

    return (
        <div className="login-window" >
            <div className="login-title" style={{backgroundColor: error ? "#B07483" : ""}}> { showError } </div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email"> Email </label>
                <input type="email" onChange={ e => setEmail(e.target.value)} autoComplete="email" />
                <label htmlFor="password"> Hasło </label>
                <input type="password" onChange={ e => setPassword(e.target.value)} autoComplete="current-password" />
                <BigButton type={"Submit"} name={"Zaloguj się"} />
            </form>
            <div className="line" />
            <GoogleButton className="btn" onClick={handleGoogleSignIn} />

            <div className="login-footer">
                Nie masz konta ?
                <Link to="/register"> Zarejestruj się! </Link>
            </div>
        </div>
    )
}