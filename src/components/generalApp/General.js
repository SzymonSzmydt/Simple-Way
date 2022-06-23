import {useLocation} from 'react-router-dom';
import "./css/general.css";
import {Window} from "../windows/Window";
import {GeneralHeader} from "./GeneralHeader";
import {GeneralDocuments} from "./GeneralDocuments";


export function General() {
    const location = useLocation();
    const myUser = location.state["myUser"];

    return (
        <Window>
            <div>
                <GeneralHeader myUser={myUser} />
                <GeneralDocuments />
            </div>
        </Window>
    )
}