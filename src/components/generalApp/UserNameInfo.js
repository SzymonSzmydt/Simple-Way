
export function UserNameInfo( {username, surname} ) {

    return (
    <div className="mainCompany-body">
        <div className="mainCompany__title"> Dane sprzedawcy </div>
        <div className="mainCompany__lists">
            <p className="text-list"> {username} {surname} </p>
        </div>
    </div>
    )
}