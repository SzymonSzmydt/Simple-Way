import "./css/buttonPanel.css";
import {SmallButton} from "./SmallButton";

export function ButtonPanel({ setAddProductButton }) {

    return (
        <div className="buttonPanel">
            <SmallButton name={"Dodaj"} onClick={()=> setAddProductButton(true)}/>
            <SmallButton name={"Zmień"} />
            <SmallButton name={"Usuń"} />
        </div>
    )
}