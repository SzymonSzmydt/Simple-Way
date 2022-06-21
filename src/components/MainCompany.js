import { useNavigate } from "react-router-dom";
import {useState} from "react";
import {BigWindowTitleInfo} from "./windows/BigWindowTitleInfo";
import {Information} from "./Information";
import {WindowListsItems} from "./windows/WindowListsItems";
import {SmallButton} from "./button/SmallButton";
import {SmallTitleWindow} from "./windows/SmallTitleWindow";

export function MainCompany({ userData }) {
    const [ selectedKey, setSelectedKey ] = useState('');
    const [ myUser, setMyUser ] = useState({});

    const navigate = useNavigate();

    // After Clicking button Dodaj navigate to /add site
    const handleAddClick = ()=> navigate("/add", true);

    // After Clicking Name in Lists
    const handleSelectListItem = (element) => {
        setSelectedKey(element);
        const oneUser = userData.filter(e => e.id === selectedKey);
        return oneUser.length > 0 ? setMyUser( oneUser[0]["data"]["getUser"] ) : null;
    }

    // After Selected list Item
    const ifListItemSelected = ( key ) => key === selectedKey ? "single-clicked" : "single-list";

    // Wybierz button
    const handleChoiceClick = () => {
        myUser.key = selectedKey;
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
                        <div key={i} className={ifListItemSelected(e.id)} onClick={ () => handleSelectListItem(e.id)}>
                            {e.data.getUser.username} {e.data.getUser.surname}
                        </div> ) }
                </WindowListsItems>
            </SmallTitleWindow>
            <Information myUser={ myUser } />
        </BigWindowTitleInfo>
    )
}

