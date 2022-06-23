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

    console.log(thatMonth);

    return (
        <WindowContainer>
            <table className="table">
                <thead className="thead">
                    <tr>
                        <td className="col col-lp"> Lp. </td>
                        <td className="col col-nr"> Nr dok. </td>
                        <td className="col col-name"> Nazwa </td>
                        <td className="col col-summary"> Wartość</td>
                        <td className="col col-data"> Data </td>
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