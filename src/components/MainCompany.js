import { useNavigate } from "react-router-dom";
import {useState} from "react";
import {BigWindowTitleInfo} from "./windows/BigWindowTitleInfo";
import {Information} from "./windows/Information";
import {WindowListsItems} from "./windows/WindowListsItems";
import {SmallButton} from "./button/SmallButton";
import {SmallTitleWindow} from "./windows/SmallTitleWindow";

export function MainCompany({ userData }) {
    const navigate = useNavigate();
    const [ selectedKey, setSelectedKey ] = useState('');
    const [ myUser, setMyUser ] = useState({});

    // After Clicking button Dodaj navigate to /add site
    const handleAddClick = ()=> navigate("/add", true);

    // After Clicking Name in Lists
    const handleSelectListItem = (element) => {
        setSelectedKey(element.username + element.surname);
        setMyUser(element);
        }

    // After Selected list Item
    const ifListItemSelected = ( key ) => key === selectedKey ? "single-clicked" : "single-list";

    // After Clicking Wybierz button
    const handleChoiceClick = () => {
        if (selectedKey.length > 0) navigate('/application/general',{state: {myUser}});
        return null;
    }

    const infoText = "Wybierz lub dodaj kontrahenta, którego będziesz używać do wystawiania dokumentów sprzedaży";

    return (
        <BigWindowTitleInfo infoText={infoText}>
            <SmallTitleWindow windowTitle={"Dane sprzedawcy"}>
                <section>
                    <SmallButton name={"Dodaj"} onClick={handleAddClick} />
                    <SmallButton name={"Usuń"} />
                    <SmallButton name={"Wybierz"} onClick={handleChoiceClick} />
                </section>
                <WindowListsItems>
                    { userData.map( (e, i) =>
                        <div key={i} className={ifListItemSelected(e.key.name + e.key.surname)} onClick={ () => handleSelectListItem(e["key"]) }>
                            { e.key.username } { e.key.surname }
                        </div> ) }
                </WindowListsItems>
            </SmallTitleWindow>
            <Information myUser={myUser} />
        </BigWindowTitleInfo>
    )
}

