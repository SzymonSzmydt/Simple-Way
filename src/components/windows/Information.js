import {SmallTitleWindow} from "./SmallTitleWindow";

export function Information( {myUser} ) {
    if (!myUser) return null;

    return (
        <SmallTitleWindow windowTitle={"Informacje o podmiocie"} style={{minWidth: "18rem"}}>
                 <table className="text">
                     <tbody>
                        <tr className="text-list">
                            <td> <b> Imię </b> </td>
                            <td> { myUser.username } </td>
                        </tr>
                        <tr className="text-list">
                            <td> <b> Nazwisko </b> </td>
                            <td> {  myUser.surname } </td>
                        </tr>
                        <tr className="text-list">
                            <td> <b> Ulica </b> </td>
                            <td> {  myUser.address } </td>
                        </tr>
                        <tr className="text-list">
                            <td> <b> Kod pocztowy </b> </td>
                            <td> {  myUser.postcode } </td>
                        </tr>
                        <tr className="text-list">
                            <td> <b> Miasto </b> </td>
                            <td> {  myUser.city } </td>
                        </tr>
                     </tbody>
                 </table>
        </SmallTitleWindow>
    )
}