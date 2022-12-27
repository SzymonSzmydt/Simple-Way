import "./css/record.css";
import { useState } from "react";
import { Window } from "../../windows/Window";
import { RecordHeader } from "./RecordHeader";
import { RecordDocuments } from "./RecordDocuments";
import { New } from "./New";
import { BarChart } from '../../charts/BarChart';
export function Record() {
    const [ addProductButton, setAddProductButton ] = useState(false);
    const whenAddingNewProduct =
        addProductButton ?
            <New setAddProductButton={setAddProductButton}/>
            : <RecordHeader setAddProductButton={setAddProductButton} />;
    return (
        <Window>
            { whenAddingNewProduct }
            <RecordDocuments />
            <BarChart/>
        </Window>
    )
}