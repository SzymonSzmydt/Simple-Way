import {BigWindowTitleInfo} from "./windows/BigWindowTitleInfo";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export function LoadingSpinner() {
    const navigation = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation("/application", true);
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    const [ counter, setCounter ] = useState(6);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCounter(prevState => prevState - 1);
        }, 1000);

        if (counter < 0) {
            navigation("/home", true);
            }
        return () => clearTimeout(timer);
    }, [counter]);

    return (
        <BigWindowTitleInfo infoText={`Ładowanie danych - jeżeli dane nie istnieją zostaniesz przekierowany do wyboru użytkownika za ${counter}`}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </BigWindowTitleInfo>
    )
}