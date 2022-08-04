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
                { monthsText.map( e => 
                    <option key={e} value={e}> 
                        { e.replace(e.charAt(0), e.charAt(0).toUpperCase()) } 
                    </option> )}
            </select>
        </form>
    )
}