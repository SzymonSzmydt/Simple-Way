import {doc, setDoc} from "firebase/firestore";
import {db} from "../../context/firebase";
import {useUserAuth} from "../../context/UserAuthContext";


export function DocumentsLists({ date, sum, info, i, documents, choiceMonth, setUpdateComponent, updateComponent }) {
    const { user } = useUserAuth();

    console.log("DocumentsLists ", documents);
    console.log("await", documents[choiceMonth]);

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

    const handleDeleteClick = (i) => {
        if (documents[choiceMonth][documentsKeys[i]]) {
            delete documents[choiceMonth][documentsKeys[i]];
            setUpdateComponent(!updateComponent);
            return saveData(i);
        }
        return console.log("Error, object value not exist");
    }


    return (
                <tr>
                    <td className="col"> { i + 1 } </td>
                    <td className="col"> { date } </td>
                    <td className="col"> { sum + " zł" } </td>
                    <td className="col"> { null } </td>
                    <td className="col"> { info } </td>
                    <td className="col">
                        <span className="material-symbols-outlined edit-icon" >edit</span>
                        <span className="material-symbols-outlined delete-icon" onClick={(e)=> handleDeleteClick( i ) }>delete</span>
                    </td>
                </tr>
    )
}