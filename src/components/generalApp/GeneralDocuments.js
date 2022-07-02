import "./css/generalDokuments.css";
import {WindowContainer} from "../windows/WindowContainer";
import {DocumentsLists} from "./DocumentsLists";

export const GeneralDocuments = ({ documents, setTotalMonth, choiceMonth }) => {

    const documentsValues = documents.length && documents != null > 0 ? documents.map( e => Object.values(e)) : null;

    const data = documents.length > 0 ? documentsValues[0].map( ( {date, sum, info}, i ) =>
            <DocumentsLists key={date} date={date} sum={sum} info={info} i={i} choiceMonth={choiceMonth} documents={documents}/>
        ) : null;

    const sumOfMonth = documents.length > 0 ? documentsValues[0].reduce( (a, b) =>  parseFloat(a) + parseFloat(b.sum), 0 ) : 0;
    setTotalMonth(sumOfMonth);

    return (
        <WindowContainer>
            <table className="table">
                <thead className="thead">
                    <tr>
                        <td className="col-lp"> Lp. </td>
                        <td className="col-data"> Data </td>
                        <td className="col-summary"> Kwota sprzedaży</td>
                        <td className="col-total"> Kwota narastająca od początku roku </td>
                        <td className="col-suggestions"> Uwagi </td>
                        <td className="col-options"> Opcje </td>
                    </tr>
                </thead>
                <tbody>
                { data }
                </tbody>
            </table>
        </WindowContainer>

    )
}