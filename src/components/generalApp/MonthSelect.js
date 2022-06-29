import "./css/monthSelect.css";


export function MonthSelect( {setChoiceMonth} ) {
    const monthsText = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
    const monthDigit = new Date().getMonth().toLocaleString();
    const defaultMonth = monthsText[monthDigit];
    const handleSelect = (e) => {
        setChoiceMonth(e);
    }

    return (
        <form className="monthSelect">
            <select onChange={(e)=> handleSelect(e.target.value)} defaultValue={defaultMonth}>
                <option value="styczeń" > Styczeń </option>
                <option value="luty"> Luty </option>
                <option value="marzec"> Marzec </option>
                <option value="kwiecień"> Kwiecień </option>
                <option value="maj"> Maj </option>
                <option value="czerwiec"> Czerwiec </option>
                <option value="lipiec"> Lipiec </option>
                <option value="sierpień"> Sierpień </option>
                <option value="wrzesień" > Wrzesień </option>
                <option value="październik"> Październik </option>
                <option value="listopad"> Listopad </option>
                <option value="grudzień"> Grudzień </option>
            </select>
        </form>
    )
}