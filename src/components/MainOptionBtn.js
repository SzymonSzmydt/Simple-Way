import {SmallButton} from "./button/SmallButton";
import {useNavigate} from "react-router-dom";

export function MainOptionBtn({ handleChoiceClick, handleDeleteClick }) {
    const navigate = useNavigate();

    const handleAddClick = ()=> navigate("/add", true);

    return (
        <section className="mainOptionBtn">
            <SmallButton name={"Dodaj"} onClick={handleAddClick} />
            <SmallButton name={"Usuń"} onClick={handleDeleteClick}/>
            <SmallButton name={"Wybierz"} onClick={handleChoiceClick} />
        </section>
    )
}