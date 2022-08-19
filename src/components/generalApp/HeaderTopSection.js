import {SmallTitleWindow} from "../windows/SmallTitleWindow";
import {MonthSelect} from "./MonthSelect";
import { SmallButton } from './../button/SmallButton';
import { useCallback } from 'react';

export function HeaderTopSection({ setChoiceMonth, setAddProductButton }) {

    return (
            <SmallTitleWindow windowTitle={"Miesiąc"} >               
                <MonthSelect setChoiceMonth={setChoiceMonth} />
                <SmallButton name={"Nowy wpis"} onClick={useCallback(()=> { setAddProductButton(true)},[])} />
            </SmallTitleWindow>
    )
}