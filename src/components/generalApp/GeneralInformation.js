
export function GeneralInformation({ month }) {

    return (
        <table style={{width: "20rem", height: "6.3rem"}}>
            <tbody>
            <tr className="text-list" >
                <td style={{width: "10rem"}}> <b> Miesiąc </b> </td>
                <td className="text__align-right"> { month } </td>
            </tr>
            <tr className="text-list">
                <td> <b> Łączna wartość </b> </td>
                <td className="text__align-right"> 0 zł </td>
            </tr>
            <tr className="text-list">
                <td> <b> Niewykorzystana kwota </b> </td>
                <td className="text__align-right"> 0 zł </td>
            </tr>
            </tbody>
        </table>
    )
}