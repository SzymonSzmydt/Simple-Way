import {useState} from "react";
import "./css/isLogged.css";


export function Logged() {
    const [ formData, setFormData ] = useState({name: '', password: ''});

    const handleChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleClickBtn = () => {
        
    }

    return (
        <div className="isLogged" >
            <div className="form-title"> Zaloguj się </div>
            <form className="form" >
                <label htmlFor="name"> Login </label>
                <input type="text" name="name" value={ formData.name } onChange={ handleChangeInput} />
                <label htmlFor="password"> Hasło </label>
                <input type="password" name="password" value={ formData.password } onChange={ handleChangeInput } />
                <button className="btn" onClick={ handleClickBtn }> Zaloguj </button>
            </form>
            <div className="form-footer"> Jesteś pierwszy raz ? <span className="link"> Zarejestruj się! </span> </div>
        </div>
    )
}