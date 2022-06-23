import "./css/monthSelect.css";
export function MonthSelect( {setChoiceMonth} ) {

    const handleSelect = (e) => {
        setChoiceMonth(e);
    }

    return (
        <form className="monthSelect">
            <select onChange={(e)=> handleSelect(e.target.value)}>
                <option value="Styczeń" > Styczeń </option>
                <option value="Luty"> Luty </option>
                <option value="Marzec"> Marzec </option>
                <option value="Kwiecień"> Kwiecień </option>
                <option value="Maj"> Maj </option>
                <option value="Czerwiec"> Czerwiec </option>
                <option value="Lipiec"> Lipiec </option>
                <option value="Sierpień"> Sierpień </option>
                <option value="Wrzesień" > Wrzesień </option>
                <option value="Październik"> Październik </option>
                <option value="Listopad"> Listopad </option>
                <option value="Grudzień"> Grudzień </option>
            </select>
        </form>
    )
}