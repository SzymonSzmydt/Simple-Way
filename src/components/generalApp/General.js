import "./css/general.css";
import {useState} from "react";
import {Window} from "../windows/Window";
import {GeneralHeader} from "./GeneralHeader";
import {GeneralDocuments} from "./GeneralDocuments";
import {New} from "./New";

export function General() {
    const [ addProductButton, setAddProductButton ] = useState(false);

    const whenAddingNewProduct =
        addProductButton ?
            <New setAddProductButton={setAddProductButton}/>
            : <GeneralHeader setAddProductButton={setAddProductButton} />;
    return (
        <Window>
                { whenAddingNewProduct }
                <GeneralDocuments />
        </Window>
    )
}