import "./css/addSeller.css";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../context/firebase";
import {useUserAuth} from "../../context/UserAuthContext";
import {BigWindowTitleInfo} from "../windows/BigWindowTitleInfo";
import {Window} from "../windows/Window";
import {SmallTitleWindow} from "../windows/SmallTitleWindow";
import {BigButton} from "../button/BigButton";

export function AddSeller() {
    const newSeller = {
        username: '',
        surname: '',
        address: '',
        postcode: '',
        city: ''
    }
    const { user } = useUserAuth();
    const navigate = useNavigate();
    const [ error, setError ] = useState('');
    const [ isValid, setIsValid ] = useState(true);
    const [ getUser, setGetUser ] = useState(newSeller);

    const handleChange = e => {
        setGetUser({
            ...getUser,
            [e.target.name]: e.target.value
        });
    }

    const handleBack = () => navigate("/application", true);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (getUser.username.length < 3) {
            setIsValid(false);
            setError("Imię musi posiadać więcej znaków");
        }
        else if (getUser.surname.length < 4) {
            setIsValid(false);
            setError("Nazwisko musi posiadać więcej znaków");
        }
        else if (getUser.address.length < 6) {
            setIsValid(false);
            setError("Adres musi posiadać więcej znaków");
        }
        else if (getUser.postcode.length < 6) {
            setIsValid(false);
            setError("Nieprawidłowy kod pocztowy");
        }
        else {
            try {
                const docRef = await addDoc( collection(db, `${user.email}`), {getUser});
                console.log("Document written with ID: ", docRef.id);
            } catch (err) {
                console.error("Error adding document: ", err);
                setError(err);
            }
            setIsValid(true);
            navigate("/application", true);
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
                <SmallTitleWindow style={style} windowTitle={ isValid ? "Dodaj podmiot" : error }>
                    <form className="form" onSubmit={event => handleSubmit(event)}>
                        <label className="label">
                            Imię
                            <input type="text" name="username" value={getUser.name} onChange={ e => handleChange(e)} placeholder="np. Jan" />
                        </label>
                        <label className="label">
                            Nazwisko
                            <input type="text" name="surname" value={getUser.surname} onChange={ e => handleChange(e)} placeholder="np. Nowak"/>
                        </label>
                        <label className="label">
                            Adres
                            <input type="text" name="address" value={getUser.address} onChange={ e => handleChange(e)} placeholder="np. Zakładowa 12"/>
                        </label>
                        <label className="label">
                            Kod Pocztowy
                            <input type="text" name="postcode" value={getUser.postcode} onChange={ e => handleChange(e)} placeholder="np. 63-600"/>
                        </label>
                        <label className="label">
                            Miasto
                            <input type="text" name="city" value={getUser.city} onChange={ e => handleChange(e)} placeholder="np. Kępno "/>
                        </label>
                        <BigButton type={"submit"} name={"Dodaj"} />
                        <BigButton type={"reset"} onClick={handleBack} name={"Anuluj"} />
                    </form>
                </SmallTitleWindow>
            </BigWindowTitleInfo>
        </Window>
    )
}