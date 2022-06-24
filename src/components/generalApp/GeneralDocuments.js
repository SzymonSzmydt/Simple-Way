import "./css/generalDokuments.css";
import {WindowContainer} from "../windows/WindowContainer";

const test = {
    lp: " ",
    nr: " ",
    name: " ",
    summary: " ",
    data: " "
}

export const GeneralDocuments = ({ thatMonth }) => {

    if (thatMonth === undefined) thatMonth = test;

    return (
        <WindowContainer>
            <table className="table">
                <thead className="thead">
                    <tr>
                        <td className="col col-lp"> Lp. </td>
                        <td className="col col-data"> Data </td>
                        <td className="col col-summary"> Kwota sprzedaży</td>
                        <td className="col col-total"> Kwota narastająca od początku roku </td>
                        <td className="col col-suggestions"> Uwagi </td>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                    </tr>
                </tbody>
            </table>
        </WindowContainer>

    )
}