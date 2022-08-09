import {WindowContainer} from "../windows/WindowContainer";
import {GeneralInformation} from "./GeneralInformation";
import {HeaderTopSection} from "./HeaderTopSection";

export function GeneralHeader({ setAddProductButton, setChoiceMonth, choiceMonth, totalMonth, userData }) {

    return (
        <WindowContainer>
            <HeaderTopSection 
                setChoiceMonth={setChoiceMonth} 
                setAddProductButton={setAddProductButton}
                userData={userData}
                 />
            <GeneralInformation month={choiceMonth} totalMonth={totalMonth}/>
        </WindowContainer>
    )
}