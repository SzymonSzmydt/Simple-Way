import { SmallTitleWindow } from "../../windows/SmallTitleWindow";
import { MonthSelect } from "./MonthSelect";
import { SmallButton } from './../../button/SmallButton';
export function HeaderTopSection({ setAddProductButton }) {
    return (
            <SmallTitleWindow windowTitle="Miesiąc" >               
                <MonthSelect />
                <SmallButton name="Nowy wpis" onClick={()=> setAddProductButton(true)} />
            </SmallTitleWindow>
    )
}