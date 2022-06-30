import "./css/buttonPanel.css";
import {SmallButton} from "./SmallButton";

export function ButtonPanel({ setAddProductButton }) {

    return (
        <div className="buttonPanel">
            <SmallButton name={"Dodaj"} onClick={()=> setAddProductButton(true)} />
            <span> Nowy wpis do ewidencji </span>
        </div>
    )
}