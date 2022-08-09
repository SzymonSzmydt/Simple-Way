import {SmallTitleWindow} from "../windows/SmallTitleWindow";
import {MonthSelect} from "./MonthSelect";
import { SmallButton } from './../button/SmallButton';

export function HeaderTopSection({ setChoiceMonth, setAddProductButton }) {

    return (
            <SmallTitleWindow windowTitle={"Miesiąc"} >               
                <MonthSelect setChoiceMonth={setChoiceMonth} />
                <SmallButton name={"Nowy wpis"} onClick={()=> setAddProductButton(true)} />
            </SmallTitleWindow>
    )
}