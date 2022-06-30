import {SmallTitleWindow} from "../windows/SmallTitleWindow";

export function GeneralInformation({ month, totalMonth }) {
    const underLimit = totalMonth > 1505;

    const style = {
        backgroundColor: underLimit ? "#B07483" : "",
    }

    return (
        <SmallTitleWindow style={style} windowTitle={ underLimit ? "Przekroczono limit!" : "Przydatne informacje"} >
            <table style={{width: "20rem", height: "6.3rem"}}>
                <tbody>
                    <tr className="text-list" >
                        <td style={{width: "10rem"}}> <b> Miesiąc </b> </td>
                        <td className="text__align-right"> { month.charAt(0).toUpperCase() + month.slice(1) } </td>
                    </tr>
                    <tr className="text-list">
                        <td> <b> Łączna wartość </b> </td>
                        <td className="text__align-right"> {totalMonth.toFixed(2) } zł </td>
                    </tr>
                    <tr className="text-list">
                        <td style={{color: underLimit ? "red" : ""}}> <b>
                            { underLimit ? "Przekroczono limit!" : "Niewykorzystana kwota " }
                        </b> </td>
                        <td className="text__align-right" style={{color: underLimit ? "red" : ""}}> {1505 - totalMonth.toFixed(2) } zł </td>
                    </tr>
                </tbody>
            </table>
        </SmallTitleWindow>
    )
}