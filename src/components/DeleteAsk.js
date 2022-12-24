import {SmallButton} from "./button/SmallButton";

export function DeleteAsk({ setToDelete }) {

    const deletingRecord = () => {
    }
    return (
        <section className="mainOptionBtn">
            <SmallButton name={"Tak"} onClick={deletingRecord} />
            <SmallButton name={"Nie"} onClick={()=> setToDelete(false)} />
        </section>
    )
}