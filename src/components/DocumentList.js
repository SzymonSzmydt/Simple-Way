import "./css/dokumentList.css";

export const DocumentList = () => {

    return (
        <div className="listOfCompaniesBox">

                <table>
                    <thead className="table">
                    <tr>
                        <td className="column0"> Lp. </td>
                    </tr>
                        <tr>
                            <td className="column2"> Nr dokumentu </td>
                        </tr>
                        <tr>
                            <td className="column1"> Nazwa </td>
                        </tr>
                        <tr>
                            <td className="column2"> Wartość brutto </td>
                        </tr>
                        <tr>
                            <td className="column2"> Data </td>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
        </div>
    )
}