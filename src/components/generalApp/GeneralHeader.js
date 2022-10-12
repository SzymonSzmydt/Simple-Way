import {WindowContainer} from "../windows/WindowContainer";
import {GeneralInformation} from "./GeneralInformation";
import {HeaderTopSection} from "./HeaderTopSection";

export function GeneralHeader({ setAddProductButton, userData }) {

    return (
        <WindowContainer>
            <HeaderTopSection setAddProductButton={setAddProductButton} />
            <GeneralInformation />
        </WindowContainer>
    )
}