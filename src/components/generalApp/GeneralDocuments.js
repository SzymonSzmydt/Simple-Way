import "./css/generalDokuments.css";
import {WindowContainer} from "../windows/WindowContainer";
import {DocumentsLists} from "./DocumentsLists";
import {LoadingSpinner} from "../LoadingSpinner";
import { useEffect } from 'react';
import { totalMonth } from '../../redux/monthSlice';
import { useSelector, useDispatch } from 'react-redux';

export const GeneralDocuments = () => {
    const dispatch = useDispatch();
    const documents = useSelector(state => state.document.data);
    const keys = useSelector(state => state.document.keys);
    const choiceMonth = useSelector(state => state.months.defaultMonth);

    const isMonthInDocuments = keys.includes(choiceMonth);
    const documentsValues = isMonthInDocuments ?
        Object.values( documents[choiceMonth]) : [{date: 0, sum: 0, total: 0}];
    let total = 0;
    const data = documentsValues.length > 0 ? documentsValues.map( ( {date, sum}, index ) =>
            <DocumentsLists 
                key={date} 
                date={date} 
                sum={parseFloat(sum).toFixed(2)}
                total={total += parseFloat(sum)} 
                index={index}
                choiceMonth={choiceMonth} 
     />) : null;
     const sumOfMonth = isMonthInDocuments ? documentsValues.reduce( (a, b) =>  parseFloat(a) + parseFloat(b.sum), 0 ) : 0;
     
     useEffect(()=> {  
        dispatch(totalMonth(sumOfMonth));
     }, [sumOfMonth]);

    return (
        <WindowContainer>
            <table className="table">
                <thead className="thead">
                    <tr>
                        <td className="col col-lp"> Lp. </td>
                        <td className="col col-data"> Data </td>
                        <td className="col col-summary"> Kwota sprzedaży</td>
                        <td className="col col-total"> Kwota rosnąco </td>
                        <td className="col col-options"> Opcje </td>
                    </tr>
                </thead>
                <tbody>
                { data.length > 0 ? data : <tr><td colSpan="6"><LoadingSpinner/></td></tr> }
                </tbody>
            </table>
        </WindowContainer>

    )
}