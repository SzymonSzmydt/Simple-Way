import './css/homeIntro.css';
import { Link } from 'react-router-dom';
import { useUserAuth } from "../../context/UserAuthContext";

export function HomeIntro() {
    const {user} = useUserAuth();
    return (
        <div className="home__intro">
            <h1 className="home__intro-title">
                Pomagamy w ewidencji działalności nierejestrowanej
            </h1>
            <Link to={user ? "/application" : "/login"} className="home__intro-link">Utwórz swoją ewidencję</Link>
        </div>
    )
}