import {SmallTitleWindow} from "../../windows/SmallTitleWindow";
import { useSelector } from 'react-redux';

export function RecordInformation() {
    const month = useSelector(state => state.document.defaultMonth);
    const totalMonth = useSelector(state => state.document.totalMonth);
    const underLimit = totalMonth > 1505;

    const style = {
        backgroundColor: underLimit ? "#B07483" : "",
    }
    return (
        <SmallTitleWindow style={style} windowTitle={ underLimit ? "Przekroczono limit!" : "Przydatne informacje"} >
            <table className="general__information-table">
                <tbody>
                    <tr className="text-list" >
                        <td> <b> Miesiąc </b> </td>
                        <td className="text__align-right"> { month.charAt(0).toUpperCase() + month.slice(1) } </td>
                    </tr>
                    <tr className="text-list">
                        <td> <b> Łączna wartość </b> </td>
                        <td className="text__align-right"> {totalMonth.toFixed(2) } zł </td>
                    </tr>
                    <tr className="text-list">
                        <td style={{color: underLimit ? "#B07483" : ""}}> <b>
                            { underLimit ? "Przekroczono limit!" : "Niewykorzystana kwota " }
                        </b> </td>
                        <td className="text__align-right" style={{color: underLimit ? "#B07483" : ""}}> {1505 - totalMonth.toFixed(2) } zł </td>
                    </tr>
                </tbody>
            </table>
        </SmallTitleWindow>
    )
}