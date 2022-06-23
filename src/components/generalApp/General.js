import {useLocation} from 'react-router-dom';
import "./css/general.css";
import {Window} from "../windows/Window";
import {GeneralHeader} from "./GeneralHeader";
import {GeneralDocuments} from "./GeneralDocuments";
import {useState} from "react";
import {New} from "./New";


export function General() {
    const location = useLocation();
    const myUser = location.state["myUser"];

    const [ addProductButton, setAddProductButton ] = useState(false);
    const whenAddingNewProduct =
        addProductButton ?
            <New setAddProductButton={setAddProductButton}/> : <GeneralHeader myUser={myUser} setAddProductButton={setAddProductButton}/>;

    return (
        <Window>
            <div>
                { whenAddingNewProduct }
                <GeneralDocuments />
            </div>
        </Window>
    )
}