import {useReducer} from "react";
import "./css/loginWindow.css";
import {useUserAuth} from "../../context/UserAuthContext";
import { Link, useNavigate } from 'react-router-dom';
import {BigButton} from "../../components/button/BigButton";

const initialState = {
    email: '',
    password: '',
    error: ''
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

export function RegisterWindow() {
    const [ state, dispatch ] = useReducer(loginReducer, initialState);
    const { email, password, error } = state;

    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
  
        if (email === "" || email.match(/.*\.\w{2,3}/g) === null){
            return dispatch({ type: 'error', playload: "Please Enter a Valid Email" });
          }
        if (password.length < 7 || password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/)){
            return dispatch({ type: 'error', playload: "The password is too simply" });
        }

        try {
            await signUp(email, password);
            navigate("/application");
        } catch (err) {
            console.log(err);
            dispatch({ type: 'error', playload: err.message })
        }
    }

    const showError = error ? <span> {error.split('Firebase:')} </span> : "Zarejestruj się";


    return (
        <div className="login-window" >
            <div className="login-title" style={{backgroundColor: error ? "#B07483" : ""}}> { showError } </div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email"> Email </label>
                <input type="email" onChange={ e => dispatch({ type: 'field', field: 'email', value: e.currentTarget.value })} autoComplete="email" />
                <label htmlFor="password"> Hasło </label>
                <input type="password" onChange={ e => dispatch({ type: 'field', field: 'password', value: e.currentTarget.value })} autoComplete="new-password" />
                <BigButton type={"submit"} name={"Zarejestruj się !"} />
            </form>

            <div className="login-footer">
                Masz konto ?
                <Link to="/login"> Zaloguj się!</Link>
            </div>
        </div>
    )
}