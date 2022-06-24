import "./css/new.css";
import {SmallTitleWindow} from "../windows/SmallTitleWindow";
import {useState} from "react";
import {SmallButton} from "../button/SmallButton";
import {WindowContainer} from "../windows/WindowContainer";

export function New({ setAddProductButton, setSellOfDay }) {
    const [ products, setProducts ] = useState({date: '', sum: '', info: ''});

    const handleChange = (e) => {
        e.preventDefault();
        setProducts( {
            ...products,
            [e.target.name] : e.target.value
        });
    }

    const saveData = ()=> {
        if (products.date.length === 10 && products.sum.length > 0) {
            setSellOfDay(products);
        }

    }

    const cancel = () => {
        setProducts({date: '', sum: '', info: ''});
        setAddProductButton(false);
    }
    return (
        <WindowContainer>
            <SmallTitleWindow windowTitle={"Sprzedaż w danym dniu"}>
                <form className="new">
                    <label className="new__label">
                        Data
                        <input type="date" name="date" onChange={event => handleChange(event)} />
                    </label>
                    <label className="new__label" >
                        Kwota sprzedaży
                        <input type="number" name="sum" onChange={event => handleChange(event)} />
                    </label>
                    <label className="new__label" >
                        Uwagi
                        <input id="info" type="text" name="info" onChange={event => handleChange(event)} />
                    </label>
                </form>
                <div className="window-row bottom-margin">
                    <SmallButton name={"Zapisz"} onClick={ saveData }/>
                    <SmallButton name={"Anuluj"} onClick={ cancel }/>
                </div>
            </SmallTitleWindow>
        </WindowContainer>
    )
}