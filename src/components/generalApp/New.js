import "./css/new.css";
import {SmallTitleWindow} from "../windows/SmallTitleWindow";
import {useState} from "react";
import {SmallButton} from "../button/SmallButton";
import {WindowContainer} from "../windows/WindowContainer";

export function New({ setAddProductButton }) {
    const [ products, setProducts ] = useState({day: '',name: '', q: '', price: '', sum: ''});

    const handleChange = (e) => {
        e.preventDefault();
        setProducts( {
            ...products,
            [e.target.name] : e.target.value
        });
    }

    const cancel = () => {
        setProducts({day: '',name: '', q: '', price: '', sum: ''});
        setAddProductButton(false);
    }
    return (
        <WindowContainer>
            <SmallTitleWindow windowTitle={"Uzupełni pola dla produktu lub usługi"}>
                <form className="new">
                    <label className="new__label">
                        Dzień
                        <input type="number" name="day" onChange={event => handleChange(event)} />
                    </label>
                    <label className="new__label" >
                        Nazwa
                        <input id="name" type="text" name="name" onChange={event => handleChange(event)} />
                    </label>
                    <label className="new__label" >
                        Ilość
                        <input type="number" name="q" onChange={event => handleChange(event)} />
                    </label>
                    <label className="new__label" >
                        Cena
                        <input type="number" name="price" onChange={event => handleChange(event)} />
                    </label>
                </form>
                <div className="window-row bottom-margin">
                    <SmallButton name={"Zapisz"} />
                    <SmallButton name={"Anuluj"} onClick={ cancel }/>
                </div>

            </SmallTitleWindow>
        </WindowContainer>

    )
}