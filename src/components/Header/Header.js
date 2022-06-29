import "./css/header.css"
import {UserName} from "./UserName";
import {Logo} from "./Logo";
import {HeaderNav} from "./HeaderNav";
import {useUserAuth} from "../../context/UserAuthContext";

export const Header = () => {
    const { user } = useUserAuth();

    return (
        <header className="header">
            <UserName user={user}/>
            { user ? <HeaderNav /> : null }
            <Logo />
        </header>
    )
}