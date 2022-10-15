import {useNavigate} from "react-router-dom";

export function Logo() {
    const navigate = useNavigate();

    return (
        <div className="logo" onClick={() => navigate("/")} >
            Simple Way
        </div>
    )
}