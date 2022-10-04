import "./css/addSeller.css";
import {useReducer} from "react";
import {useNavigate} from "react-router-dom";
import {setDoc, doc} from "firebase/firestore";
import {db} from "../../context/firebase";
import {useUserAuth} from "../../context/UserAuthContext";
import {BigWindowTitleInfo} from "../windows/BigWindowTitleInfo";
import {Window} from "../windows/Window";
import {SmallTitleWindow} from "../windows/SmallTitleWindow";
import {BigButton} from "../button/BigButton";

const initialState = {
    username: '',
    surname: '',
    address: '',
    postcode: '',
    city: '',
    error: '',
    isValid: true
}

function reducer(state, action) {
    switch (action.type) {
        case 'user':
            return {
                ...state,
                [action.field]: action.value
            }
        case 'error': 
            return {
                ...state,
                error: action.payload
            }
        case 'validation':
            return {
                ...state,
                isValid: action.payload
            }
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

export function AddSeller() {
    const { user } = useUserAuth();
    const navigate = useNavigate();
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { error, isValid, ...users } = state;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (users.username.length < 3) {
            dispatch({ type: 'validation', payload: false });
            dispatch({ type: 'error', payload: "Imię musi posiadać więcej znaków" });
        }
        else if (users.surname.length < 4) {
            dispatch({ type: 'validation', payload: false });
            dispatch({ type: 'error', payload: "Nazwisko musi posiadać więcej znaków" });
        }
        else if (users.address.length < 3) {
            dispatch({ type: 'validation', payload: false });
            dispatch({ type: 'error', payload: "Adres musi posiadać więcej znaków" });
        }
        else if (!users.postcode.match(/^\d\d-\d\d\d$/)) {
            dispatch({ type: 'validation', payload: false });
            dispatch({ type: 'error', payload: "Nieprawidłowy kod pocztowy" });
        }
        else {
            try {
                const docRef = await  doc(db, user.email, "users");
                setDoc(docRef, users );
                console.log("Document written");
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            dispatch({ type: 'validation', payload: true })
            navigate("/application");
        }
    }

    const style = {
        backgroundColor: !isValid ? "#B07483" : "",
        color: !isValid ? "white" : ""
    }
    const infoText = "Utwórz podmiot, którego będziesz używać do wystawiania dokumentów sprzedażowych";

    return (
        <Window>
            <BigWindowTitleInfo infoText={infoText} >
                <SmallTitleWindow style={style} windowTitle={ isValid ? "Uzupełnij pola" : error }>
                    <form className="form" onSubmit={event => handleSubmit(event)}>
                        <label className="label">
                            Imię
                            <input type="text" name="username"
                                onChange={ e => dispatch({type: 'user', field: 'username', value: e.currentTarget.value})} 
                                placeholder="np. Jan" />
                        </label>
                        <label className="label">
                            Nazwisko
                            <input type="text" name="surname"
                                 onChange={ e => dispatch({type: 'user', field: 'surname', value: e.currentTarget.value})} 
                                placeholder="np. Nowak"/>
                        </label>
                        <label className="label">
                            Adres
                            <input type="text" name="address"
                                onChange={ e => dispatch({type: 'user', field: 'address', value: e.currentTarget.value})}  
                                placeholder="np. Zakładowa 12"/>
                        </label>
                        <label className="label">
                            Kod Pocztowy
                            <input type="text" name="postcode"
                                onChange={ e => dispatch({type: 'user', field: 'postcode', value: e.currentTarget.value})}  
                                placeholder="np. 63-600"/>
                        </label>
                        <label className="label">
                            Miasto
                            <input type="text" name="city"
                                onChange={ e => dispatch({type: 'user', field: 'city', value: e.currentTarget.value})}  
                                placeholder="np. Kępno "/>
                        </label>
                        <BigButton type={"submit"} name={"Dodaj"} />
                        <BigButton type={"reset"} onClick={()=> navigate("/application")} name={"Anuluj"} />
                    </form>
                </SmallTitleWindow>
            </BigWindowTitleInfo>
        </Window>
    )
}