export function DocumentsLists({ date, sum, info, i }) {

    return (
                <tr>
                    <td className="col"> { i + 1 } </td>
                    <td className="col"> { date } </td>
                    <td className="col"> { sum + " zł" } </td>
                    <td className="col"> { null } </td>
                    <td className="col"> { info } </td>
                    <td className="col">
                        <span className="material-symbols-outlined edit-icon">edit</span>
                        <span className="material-symbols-outlined delete-icon">delete</span>
                    </td>
                </tr>
    )
}