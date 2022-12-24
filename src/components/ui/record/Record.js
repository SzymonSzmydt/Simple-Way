import "./css/general.css";
import {useState} from "react";
import {Window} from "../windows/Window";
import {GeneralHeader} from "./GeneralHeader";
import {GeneralDocuments} from "./GeneralDocuments";
import {New} from "./New";
import { BarChart } from '../charts/BarChart';

export function Record() {
    const [ addProductButton, setAddProductButton ] = useState(false);

    const whenAddingNewProduct =
        addProductButton ?
            <New setAddProductButton={setAddProductButton}/>
            : <GeneralHeader setAddProductButton={setAddProductButton} />;
    return (
        <Window>
            <BarChart/>
            { whenAddingNewProduct }
            <GeneralDocuments />
        </Window>
    )
}