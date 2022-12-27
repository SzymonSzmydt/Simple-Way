import {WindowContainer} from "../../windows/WindowContainer";
import {RecordInformation} from "./RecordInformation";
import {HeaderTopSection} from "./HeaderTopSection";


export function RecordHeader({ setAddProductButton, userData }) {
    return (
        <WindowContainer>
            <HeaderTopSection setAddProductButton={setAddProductButton} />
            <RecordInformation />
        </WindowContainer>
    )
}