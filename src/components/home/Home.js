import "./css/home.css";
import {BigButton} from "../button/BigButton";
import {useNavigate} from "react-router-dom";
import {Window} from "../windows/Window";

export function Home() {
    const navigate = useNavigate();

    return (
        <Window>
            <BigButton name={"Zaczynamy"} onClick={()=> navigate("/application", true)}/>
        </Window>
    )
}