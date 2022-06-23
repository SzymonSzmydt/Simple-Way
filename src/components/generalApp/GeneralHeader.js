import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {WindowContainer} from "../windows/WindowContainer";
import {SmallTitleWindow} from "../windows/SmallTitleWindow";
import {EditIcon} from "../button/EditIcon";
import {MonthSelect} from "./MonthSelect";
import {GeneralInformation} from "./GeneralInformation";
import {ButtonPanel} from "../button/ButtonPanel";


export function GeneralHeader({ myUser }) {
    const navigation = useNavigate();
    const handleBack = () => navigation("/application", true);

    const [ choiceMonth, setChoiceMonth ] = useState('');

    return (
        <WindowContainer>
            <div>
                <div>
                    <SmallTitleWindow windowTitle={"Sprzedawca"} >
                        {myUser.data.username} {myUser.data.surname}
                        <EditIcon onClick={handleBack} />
                    </SmallTitleWindow>
                    <SmallTitleWindow windowTitle={"Miesiąc"} >
                        <MonthSelect setChoiceMonth={setChoiceMonth} />
                    </SmallTitleWindow>
                </div>
                    <ButtonPanel />
            </div>

            <SmallTitleWindow windowTitle={"Przydatne informacje"} >
                <GeneralInformation month={choiceMonth} />
            </SmallTitleWindow>
        </WindowContainer>
    )
}