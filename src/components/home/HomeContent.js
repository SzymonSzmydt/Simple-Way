import "./css/home-content.css";
import {Link} from "react-router-dom";

export function HomeContent() {

    return (
        <div className="home__header container">
            <h2 className="content-title">
                Jakie są obowiązki przy działalności nierejestrowanej?
            </h2>
            <div className="home__body">
                <div className="content-left" />
                <div className="content-right">
                    <h2 className="content__title-context"> Uproszczona ewidencja sprzedaży</h2>
                    <p>To spis dokonanych przez Ciebie transakcji sprzedaży. Na podstawie tej ewidencji,
                        rozliczysz w roku kolejnym podatek dochodowy. Prawidłowo prowadzona ewidencja
                        pozwoli Ci również monitorować, czy nie przekraczasz w danym miesiącu limitu
                        przychodów.
                    </p>
                </div>
            </div>
            <div className="content-img" />
            <div className="content-bottom">
                <h2 className="content__title-marketing"> Intuicyjna obsługa!</h2>
                <p>
                    Aby zacząć prowadzenie własnej ewidencji <Link to="/register" className="home-link">zarejestruj się</Link>,
                    lub <Link to="/login" className="home-link">zaloguj</Link> przez konto Google. W ten sposób utworzysz własną
                    bazę z danymi i będziesz mógł spokojnie ewidencjonować swoją sprzedaż.
                </p>
            </div>
        </div>
    )
}