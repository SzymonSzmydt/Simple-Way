import {SmallButton} from "./button/SmallButton";

export function DeleteAsk({ setToDelete, userData, selectedElement }) {

    const deletingRecord = () => {
        delete userData[selectedElement];


    }

    return (
        <section className="mainOptionBtn">
            <SmallButton name={"Tak"}  />
            <SmallButton name={"Nie"} onClick={()=> setToDelete(false)} />
        </section>
    )
}