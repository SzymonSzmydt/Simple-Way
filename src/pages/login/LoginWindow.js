import "./css/loginWindow.css";
import {useReducer, useCallback} from "react";
import GoogleButton from 'react-google-button';
import {useUserAuth} from "../../context/UserAuthContext";
import {useNavigate, Link} from 'react-router-dom';
import {BigButton} from "../../components/button/BigButton";
const initialState = {
    email: '',
    password: '',
    error: '',
}
function loginReducer(state, action) {
    switch (action.type) {
        case 'field' : {
            return {
                ...state,
                [action.field]: action.value
            }
        }
        case 'error': {
            return {
                ...state,
                error: action.playload
            }
        }
        default: {
            throw new Error(`Unknown action type: ${action.type}`);
        }
    }
}
export function LoginWindow() {
    const navigate = useNavigate();
    const [ state, dispatch ] = useReducer(loginReducer, initialState);
    const { email, password, error } = state;
    const { logIn, googleSignIn } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'field' });

        if (email === "" || email.match(/.*\.\w{2,3}/g) === null){
            return dispatch({ type: 'error', playload: "Please Enter a Valid Email" });
          }
        if (password.length < 7 || password.test(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/g) === null){
            return dispatch({ type: 'error', playload: "The password is too simply" });
        }

        try {
            await logIn(email, password);
            navigate("/application");
        } catch (err) {
            console.log(err);
            dispatch({ type: 'error', playload: err.message })
        }
    }

    const handleGoogleClick = useCallback(async() => {
        try {
            await googleSignIn();     
        } catch (err) {
            console.log( err.message);
        }
    }, [googleSignIn]);   

    const redirect = useCallback(() => {
        window.sessionStorage.setItem('loading', "Simple Way");
        handleGoogleClick();
        navigate('/');
    }, [handleGoogleClick, navigate]); 

    const showError = error ? <span> {error.split('Firebase:')} </span> : "Zaloguj się";
    return (
        <div className="login-window" >
            <div className="login-title" style={{backgroundColor: error ? "#B07483" : ""}}> { showError } </div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email"> Email </label>
                <input type="email" onChange={ e => dispatch({ type: 'field', field: 'email', value: e.currentTarget.value })} autoComplete="email" />
                <label htmlFor="password"> Hasło </label>
                <input type="password" onChange={ e => dispatch({ type: 'field', field: 'password', value: e.currentTarget.value })} autoComplete="current-password" />
                <BigButton type={"Submit"} name={"Zaloguj się"} />
            </form>
            <div className="line" />
            <GoogleButton className="btn" onClick={redirect} />

            <div className="login-footer">
                Nie masz konta ?
                <Link to="/register"> Zarejestruj się! </Link>
            </div>
        </div>
    )
}