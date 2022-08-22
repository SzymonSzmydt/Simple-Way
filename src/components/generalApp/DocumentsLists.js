import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../context/firebase";
import {useUserAuth} from "../../context/UserAuthContext";
import { useCallback } from 'react';


export function DocumentsLists({ setDocuments, date, sum, index, documents, choiceMonth, total }) {
    const { user } = useUserAuth();
    const documentsKeys = Object.keys(documents[choiceMonth]);

    const saveData = async () => {
        const year = new Date().getFullYear().toLocaleString();
        try {
            const docRef = doc(db, user.email, year);
            await updateDoc(docRef, { [choiceMonth] : [documents[choiceMonth]] } );
            console.log("Document written with id: ");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const handleDeleteClick = useCallback((index) => {
        if (documents[choiceMonth][documentsKeys[index]]) {
            delete documents[choiceMonth][documentsKeys[index]];
            saveData();
        }
    }, [documents, choiceMonth]);

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