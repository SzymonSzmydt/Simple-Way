import "./css/general.css";
import {useState} from "react";
import {Window} from "../windows/Window";
import {GeneralHeader} from "./GeneralHeader";
import {GeneralDocuments} from "./GeneralDocuments";
import {New} from "./New";

export function General({ documents }) {
    const monthsText = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
    const monthDigit = new Date().getMonth().toLocaleString();
    const defaultMonth = monthsText[monthDigit];

    const [ choiceMonth, setChoiceMonth ] = useState(defaultMonth);

    const [ totalMonth, setTotalMonth ] = useState(0);
    const [ addProductButton, setAddProductButton ] = useState(false);

    const whenAddingNewProduct =
        addProductButton ?
            <New setAddProductButton={setAddProductButton} documents={documents}/>
            : <GeneralHeader 
                setAddProductButton={setAddProductButton} 
                setChoiceMonth={setChoiceMonth} 
                choiceMonth={choiceMonth} 
                totalMonth={totalMonth}
                />;
    return (
        <Window>
                { whenAddingNewProduct }
                <GeneralDocuments documents={documents} setTotalMonth={setTotalMonth} choiceMonth={choiceMonth} />
        </Window>
    )
}