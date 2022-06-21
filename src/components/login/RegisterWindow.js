import {useState} from "react";
import "./css/loginWindow.css";
import {useUserAuth} from "../../context/UserAuthContext";
import { Link, useNavigate } from 'react-router-dom';
import {BigButton} from "../button/BigButton";

export function RegisterWindow() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password.length > 7) {
            try {
                await signUp(email, password);
                navigate("/application");
            } catch (err) {
                console.log(err);
                setError(err.message);
            }
        }
        else {
            setError("Hasło musi posiadać więcej niż 6 znaków");
        }
    }

    const showError = error ? <span> {error.split('Firebase:')} </span> : "Zarejestruj się";


    return (
        <div className="login-window" >
            <div className="login-title" style={{backgroundColor: error ? "#B07483" : ""}}> { showError } </div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email"> Email </label>
                <input type="email" onChange={ e => setEmail(e.target.value)} autoComplete="email" />
                <label htmlFor="password"> Hasło </label>
                <input type="password" onChange={ e => setPassword(e.target.value)} autoComplete="new-password" />
                <BigButton type={"submit"} name={"Zarejestruj się !"} />
            </form>

            <div className="login-footer">
                Masz konto ?
                <Link to="/login"> Zaloguj się!</Link>
            </div>
        </div>
    )
}