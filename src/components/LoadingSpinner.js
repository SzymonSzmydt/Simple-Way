import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { SmallTitleWindow } from './windows/SmallTitleWindow';
import { Spinner } from './Spinner';

export function LoadingSpinner() {
    const navigate = useNavigate();
    const [ counter, setCounter ] = useState(6);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCounter(prevState => prevState - 1);
        }, 1000);

        if (counter > 0) {
            navigate("/application");
            }
        if (counter < 0) {
            navigate("/");
            }
        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter]);

    return (
        <SmallTitleWindow windowTitle={`Ładowanie danych - ${counter}`}>
            <Spinner/>
        </SmallTitleWindow>
    )
}