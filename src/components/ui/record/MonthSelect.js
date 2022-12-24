import "./css/monthSelect.css";
import { useDispatch, useSelector } from 'react-redux';
import { choiceMonth } from '../../redux/documentsSlice';

export function MonthSelect() {
    const dispatch = useDispatch();
    const defaultMonth = useSelector(state => state.document.defaultMonth);
    const monthsText = useSelector(state => state.document.month)

    return (
        <form className="monthSelect">
            <select onChange={(e)=> dispatch(choiceMonth(e.target.value))} defaultValue={defaultMonth}>
                { monthsText.map( e => 
                    <option key={e} value={e}> 
                        { e.replace(e.charAt(0), e.charAt(0).toUpperCase()) } 
                    </option> )}
            </select>
        </form>
    )
}