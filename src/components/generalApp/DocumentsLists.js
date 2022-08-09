import {doc, setDoc} from "firebase/firestore";
import {db} from "../../context/firebase";
import {useUserAuth} from "../../context/UserAuthContext";


export function DocumentsLists({ date, sum, index, documents, choiceMonth, setUpdateComponent, updateComponent, total }) {
    const { user } = useUserAuth();
    const documentsKeys = Object.keys(documents[choiceMonth]);

    const saveData = async () => {
        const year = new Date().getFullYear().toLocaleString();
        try {
            const docRef = await doc(db, user.email, year);
            setDoc(docRef, { [choiceMonth] : [documents[choiceMonth]] }, {merge: true} );
            console.log("Document written with id: ");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const handleDeleteClick = (index) => {
        if (documents[choiceMonth][documentsKeys[index]]) {
            delete documents[choiceMonth][documentsKeys[index]];
            setUpdateComponent(!updateComponent);
            return saveData(index);
        }
        return console.log("Error, object value not exist");
    }

    return (
                <tr>
                    <td className="col"> { index + 1 } </td>
                    <td className="col"> { date } </td>
                    <td className="col"> { sum + " zł" } </td>
                    <td className="col"> { total.toFixed(2) + " zł" } </td>
                    <td className="col">
                        <span className="material-symbols-outlined delete-icon" onClick={(e)=> handleDeleteClick( index ) }>delete</span>
                    </td>
                </tr>
    )
}