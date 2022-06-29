import "./css/new.css";
import {SmallTitleWindow} from "../windows/SmallTitleWindow";
import {useState} from "react";
import {SmallButton} from "../button/SmallButton";
import {WindowContainer} from "../windows/WindowContainer";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../context/firebase";
import {useUserAuth} from "../../context/UserAuthContext";


export function New({ setAddProductButton, choiceMonth }) {
    const [ products, setProducts ] = useState({date: '', sum: '', info: ''});

    const handleChange = (e) => {
        e.preventDefault();
        setProducts( {
            ...products,
            [e.target.name] : e.target.value
        });
    }
    const [ isValid, setIsValid ] = useState(true);
    const style = {
        backgroundColor: !isValid ? "#B07483" : "",
        color: !isValid ? "white" : ""
    }
    const { user } = useUserAuth();

    const saveData = async () => {
        if (products.date.length === 10 && products.sum.length > 0) {
            const year = new Date().getFullYear().toLocaleString();
            const dayBefore = products.date.slice(-2);
            const dayAfter = dayBefore.charAt(0) === "0" ? dayBefore.slice(1) : dayBefore;

            setIsValid(true);

            try {
                const docRef = await doc(db, user.email, year);
                setDoc(docRef, { [choiceMonth] : { [dayAfter] : products } }, {merge: true} );
                console.log("Document written with id: ");
                setAddProductButton(false);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        return setIsValid(false)
    }

    const cancel = () => {
        setAddProductButton(false);
    }
    return (
        <WindowContainer>
            <SmallTitleWindow style={style} windowTitle={ isValid ? "Sprzedaż w danym dniu" : "Pola niekompletne lub mają nieprawdłowe wartości" }>
                <form className="new">
                    <label className="new__label">
                        Data
                        <input type="date" name="date" onChange={event => handleChange(event)} />
                    </label>
                    <label className="new__label" >
                        Kwota sprzedaży
                        <input type="number" name="sum" onChange={event => handleChange(event)} />
                    </label>
                    <label className="new__label" >
                        Uwagi
                        <input id="info" type="text" name="info" onChange={event => handleChange(event)} />
                    </label>
                </form>
                <div className="bottom-margin">
                    <SmallButton name={"Zapisz"} onClick={ saveData }/>
                    <SmallButton name={"Anuluj"} onClick={ cancel }/>
                </div>
            </SmallTitleWindow>
        </WindowContainer>
    )
}