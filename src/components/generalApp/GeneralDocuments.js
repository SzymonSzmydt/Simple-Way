import "./css/generalDokuments.css";
import {WindowContainer} from "../windows/WindowContainer";
import {DocumentsLists} from "./DocumentsLists";

export const GeneralDocuments = ({ documents, setTotalMonth }) => {
    const documentsValues = documents.length > 0 ? documents.map( e => Object.values(e)) : null;

    const data = documents.length > 0 ? documentsValues[0].map( ( {date, sum, info}, i ) =>
            <DocumentsLists key={date} date={date} sum={sum} info={info} i={i} />
        ) : null;

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
                    </tr>
                </thead>
                <tbody>
                { data }
                </tbody>
            </table>
        </WindowContainer>

    )
}