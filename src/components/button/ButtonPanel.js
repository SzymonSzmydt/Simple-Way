import "./css/buttonPanel.css";
import {SmallButton} from "./SmallButton";

export function ButtonPanel() {

    return (
        <div className="buttonPanel">
            <SmallButton name={"Dodaj"} />
            <SmallButton name={"Zmień"} />
            <SmallButton name={"Usuń"} />
        </div>
    )
}