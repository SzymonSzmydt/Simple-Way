import "./css/generalDokuments.css";
import {WindowContainer} from "../windows/WindowContainer";
import {DocumentsLists} from "./DocumentsLists";
import {LoadingSpinner} from "../LoadingSpinner";
import { useEffect, useMemo } from 'react';

export const GeneralDocuments = ({ documents, setTotalMonth, choiceMonth, setDocuments }) => {
    const documentsKeys = documents.length > 0 ? Object.keys(documents[0]) : [];

    const isMonthInDocuments = documentsKeys.includes(choiceMonth);
    const documentsValues = isMonthInDocuments ?
        Object.values( documents[0][choiceMonth]) : { date: 0, sum: 0, info: 0 };
    let total = 0;
    const data = isMonthInDocuments ? documentsValues.map( ( {date, sum}, index ) =>
            <DocumentsLists 
                key={date} 
                date={date} 
                sum={parseFloat(sum).toFixed(2)}
                total={total += parseFloat(sum)} 
                index={index}
                choiceMonth={choiceMonth} 
                documents={documents[0]}
                setDocuments={setDocuments}
                documentsKeys={documentsKeys}
     />) : null;
     const sumOfMonth = useMemo(()=> isMonthInDocuments ? documentsValues.reduce( (a, b) =>  parseFloat(a) + parseFloat(b.sum), 0 ) : 0);
     
     useEffect(()=> {  
        setTotalMonth(sumOfMonth);
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
                { documents.length > 0 ? data : <tr><td colSpan="6"><LoadingSpinner/></td></tr> }
                </tbody>
            </table>
        </WindowContainer>

    )
}