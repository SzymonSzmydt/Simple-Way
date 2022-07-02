import { useNavigate } from "react-router-dom";
import {useState} from "react";
import {BigWindowTitleInfo} from "./windows/BigWindowTitleInfo";
import {Information} from "./windows/Information";
import {WindowListsItems} from "./windows/WindowListsItems";
import {SmallTitleWindow} from "./windows/SmallTitleWindow";
import {MainOptionBtn} from "./MainOptionBtn";
import {DeleteAsk} from "./DeleteAsk";

export function MainCompany({ userData }) {
    const navigate = useNavigate();
    const [ selectedElement, setSelectedElement ] = useState('');
    const [ myUser, setMyUser ] = useState({});

    const userDataValues = Object.values(userData);

    // After Clicking Name in Lists
    const handleSelectListItem = (element) => {
        setSelectedElement(element.username + element.surname);
        setMyUser(element);
        }

    // After Selected list Item
    const ifListItemSelected = ( key ) => key === selectedElement ? "single-clicked" : "single-list";

    // After Clicking Wybierz button
    const handleChoiceClick = () => {
        if (selectedElement.length > 0) navigate('/application/general',{state: {myUser}});
        return null;
    }

    const [ toDelete, setToDelete ] = useState(false);

    const handleDeleteClick = () => {
        if (selectedElement.length > 0) {
            return setToDelete(true);
        }
        return console.log("Nie wybrano użytkownika!");
    }

    const optionWindow = toDelete ? <DeleteAsk setToDelete={setToDelete} userData={userData} selectedElement={selectedElement} /> :
        <MainOptionBtn handleChoiceClick={handleChoiceClick} handleDeleteClick={handleDeleteClick} />;

    const style= {
        backgroundColor: toDelete ? "#B07483" : ""
    }
    const ask = toDelete ? "Czy na pewno usunąć wszystkie dane?" : "Dane sprzedawcy";
    const infoText = "Dodaj lub wybierz użytkownika, dla którego utworzymy ewidencję sprzedaży";

    return (
        <BigWindowTitleInfo infoText={infoText}>
            <SmallTitleWindow style={style} windowTitle={ask}>
                { optionWindow }
                <WindowListsItems>
                    { userDataValues.map( (e, i) =>
                        <div key={i} className={ifListItemSelected(e)} onClick={ () => handleSelectListItem(e) }>
                            { e.username } {e.surname }
                        </div> ) }
                </WindowListsItems>
            </SmallTitleWindow>
            <Information myUser={myUser} />
        </BigWindowTitleInfo>
    )
}

