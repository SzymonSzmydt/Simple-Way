import {WindowContainer} from "../windows/WindowContainer";
import {GeneralInformation} from "./GeneralInformation";
import {HeaderTopSection} from "./HeaderTopSection";

export function GeneralHeader({ myUser, setAddProductButton, setChoiceMonth, choiceMonth, totalMonth }) {

    return (
        <WindowContainer>
            <HeaderTopSection myUser={myUser} setChoiceMonth={setChoiceMonth} setAddProductButton={setAddProductButton} />
            <GeneralInformation month={choiceMonth} totalMonth={totalMonth}/>
        </WindowContainer>
    )
}