import "./css/new.css";
import {SmallTitleWindow} from "../../windows/SmallTitleWindow";
import {useState, useCallback} from "react";
import {SmallButton} from "../../button/SmallButton";
import {WindowContainer} from "../../windows/WindowContainer";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../../context/firebase";
import {useUserAuth} from "../../../context/UserAuthContext";
import { reduxData } from './../../../redux/documentsSlice';
import { useSelector, useDispatch } from 'react-redux';

const year = new Date().getFullYear().toLocaleString();

export function New({ setAddProductButton }) {
    const { user } = useUserAuth();
    const dispatch = useDispatch();

    const monthsText = useSelector(state => state.document.month);
    const documents = useSelector(state => state.document.data);

    const [ products, setProducts ] = useState({date: '', sum: ''});
    const [ data, setData ] = useState(documents);

    const monthDigit = products.date.charAt(5) === 0 ? products.date.slice(6, 7) : products.date.slice(5, 7);
    const selectedMonth = monthsText[monthDigit - 1];

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

    const dayBefore = products.date.slice(-2);
    const dayAfter = dayBefore.charAt(0) === "0" ? dayBefore.slice(1) : dayBefore;

    const saveDataToFirestore = useCallback( async () => {
            try {
                const docRef = await doc(db, user.email, year);
                setDoc(docRef, { [selectedMonth] : { [dayAfter] : products } }, {merge: true} );
                setAddProductButton(false);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
    }, [products, dayAfter, selectedMonth, setAddProductButton, user.email, year]);
    const saveRecords = useCallback( () => {  
        if (products.date.length === 10 && products.sum.length > 0) {
            setIsValid(true);
            setData( {...data, 
                    [selectedMonth] : {
                        [dayAfter] : {
                            date: products.date, sum: products.sum
                        }}});
            saveDataToFirestore();
        }
        else return setIsValid(false)
    }, [products, selectedMonth, dayAfter, dispatch, saveDataToFirestore, data]);
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
                        <SmallButton name={"Zapisz"} onClick={saveRecords}/>
                        <SmallButton name={"Anuluj"} onClick={ ()=> setAddProductButton(false) }/>
                    </div>
                </div>
            </SmallTitleWindow>
        </WindowContainer>
    )
}