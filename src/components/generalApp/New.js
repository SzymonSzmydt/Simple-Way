import "./css/new.css";
import {SmallTitleWindow} from "../windows/SmallTitleWindow";
import {useState, useCallback} from "react";
import {SmallButton} from "../button/SmallButton";
import {WindowContainer} from "../windows/WindowContainer";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../context/firebase";
import {useUserAuth} from "../../context/UserAuthContext";

export function New({ setAddProductButton, documents, setDocuments }) {
    const monthsText = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
    const [ products, setProducts ] = useState({date: '', sum: ''});

    const monthDigit = products.date.charAt(5) === 0 ? products.date.slice(6, 7) : products.date.slice(5, 7);
    let selectedMonth = monthsText[monthDigit - 1];

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
    const year = new Date().getFullYear().toLocaleString();
    const dayBefore = products.date.slice(-2);
    const dayAfter = dayBefore.charAt(0) === "0" ? dayBefore.slice(1) : dayBefore;

    const saveDataToFirestore = async () => {
        if (products.date.length === 10 && products.sum.length > 0) {
            setIsValid(true);

            try {
                const docRef = await doc(db, user.email, year);
                setDoc(docRef, { [selectedMonth] : { [dayAfter] : products } }, {merge: true} );
                console.log("Document written with id: ");
                setAddProductButton(false);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        return setIsValid(false)
    }

    const saveRecords = useCallback( () => {  
        setDocuments(state => ([{
            ...state,
            [selectedMonth] : { [dayAfter] : products }
        }]));
        saveDataToFirestore();
    }, [selectedMonth, dayAfter, products]);

    const cancel = () => {
        setAddProductButton(false);
    }
    return (
        <WindowContainer>
            <SmallTitleWindow style={style} windowTitle={ isValid ? "Nowy wpis rejestru sprzedaży" : "Pola niekompletne lub mają nieprawdłowe wartości" }>
                <div className="box">
                    <form className="new">
                        <label className="new__label">
                            Data
                            <input type="date" name="date" onChange={event => handleChange(event)} />
                        </label>
                        <label className="new__label" >
                            Kwota sprzedaży
                            <input type="number" name="sum" onChange={event => handleChange(event)} />
                        </label>
                    </form>
                    <div className="bottom-margin">
                        <SmallButton name={"Zapisz"} onClick={ saveRecords }/>
                        <SmallButton name={"Anuluj"} onClick={ cancel }/>
                    </div>
                </div>
            </SmallTitleWindow>
        </WindowContainer>
    )
}