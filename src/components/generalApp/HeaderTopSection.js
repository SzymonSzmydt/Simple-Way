import {SmallTitleWindow} from "../windows/SmallTitleWindow";
import {EditIcon} from "../button/EditIcon";
import {MonthSelect} from "./MonthSelect";
import {ButtonPanel} from "../button/ButtonPanel";
import {useNavigate} from "react-router-dom";

export function HeaderTopSection({ myUser, setChoiceMonth, setAddProductButton }) {
    const navigation = useNavigate();
    const handleBack = () => navigation("/application", true);

    return (
        <div>
            <div>
                <SmallTitleWindow windowTitle={"Sprzedawca"}>
                    {myUser.data.username} {myUser.data.surname}
                    <EditIcon onClick={handleBack} />
                </SmallTitleWindow>
                <SmallTitleWindow windowTitle={"Miesiąc"} >
                    <MonthSelect setChoiceMonth={setChoiceMonth} />
                </SmallTitleWindow>
            </div>
            <ButtonPanel setAddProductButton={setAddProductButton} />
        </div>
    )
}