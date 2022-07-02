import {doc, setDoc} from "firebase/firestore";
import {db} from "../../context/firebase";
import {useUserAuth} from "../../context/UserAuthContext";


export function DocumentsLists({ date, sum, info, i, documents, choiceMonth }) {
    const { user } = useUserAuth();

    console.log("Documents ", documents);

    const documentsKeys = documents.length > 0 ? documents.map( e => Object.keys(e)) : null;

    const saveData = async () => {
        const year = new Date().getFullYear().toLocaleString();

        try {
            const docRef = await doc(db, user.email, year);
            setDoc(docRef, { [choiceMonth] : documents[0] }, {merge: true} );
            console.log("Document written with id: ");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const handleDeleteClick = (i) => {
        if (documents[0][documentsKeys[0][i]]) {
            delete documents[0][documentsKeys[0][i]];
            return saveData();
        }

        return console.log("Error, object value not exist");
    }

    const handleEditClick = (e) => {

    }

    return (
                <tr>
                    <td className="col"> { i + 1 } </td>
                    <td className="col"> { date } </td>
                    <td className="col"> { sum + " zł" } </td>
                    <td className="col"> { null } </td>
                    <td className="col"> { info } </td>
                    <td className="col">
                        <span className="material-symbols-outlined edit-icon" onClick={(e)=> handleEditClick( i ) }>edit</span>
                        <span className="material-symbols-outlined delete-icon" onClick={(e)=> handleDeleteClick( i ) }>delete</span>
                    </td>
                </tr>
    )
}