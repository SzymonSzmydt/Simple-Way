import {WindowContainer} from "../windows/WindowContainer";
import {SmallTitleWindow} from "../windows/SmallTitleWindow";
import {GeneralInformation} from "./GeneralInformation";
import {HeaderTopSection} from "./HeaderTopSection";

export function GeneralHeader({ myUser, setAddProductButton, setChoiceMonth, choiceMonth }) {

    return (
        <WindowContainer>
            <HeaderTopSection myUser={myUser} setChoiceMonth={setChoiceMonth} setAddProductButton={setAddProductButton} />
            <SmallTitleWindow windowTitle={"Przydatne informacje"} >
                <GeneralInformation month={choiceMonth} />
            </SmallTitleWindow>
        </WindowContainer>
    )
}