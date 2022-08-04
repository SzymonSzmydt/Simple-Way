import {SmallButton} from "./button/SmallButton";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import {db} from "../../context/firebase";
import {useUserAuth} from "../../context/UserAuthContext";

export function DeleteAsk({ setToDelete }) {
    const { user } = useUserAuth();

    const deletingRecord = async () => {
        const userRef = doc(db, user.email, 'users');
            await updateDoc(userRef, {
                userData[selectedElement] : deleteField() });
    }

    return (
        <section className="mainOptionBtn">
            <SmallButton name={"Tak"} onClick={deletingRecord} />
            <SmallButton name={"Nie"} onClick={()=> setToDelete(false)} />
        </section>
    )
}