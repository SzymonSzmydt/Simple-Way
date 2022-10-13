import {doc, setDoc} from "firebase/firestore";
import {db} from "../../context/firebase";
import {useUserAuth} from "../../context/UserAuthContext";
import { reduxData } from "./../../redux/documentsSlice";
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function DocumentsLists({ date, sum, index, choiceMonth, total }) {
    const { user } = useUserAuth();
    const dispatch = useDispatch();
    const reduxFetchedData = useSelector(state => state.document.data);
    const documents = JSON.parse(JSON.stringify(reduxFetchedData));

    const saveDataToFirestore = useCallback(async () => {
        const year = new Date().getFullYear().toLocaleString();
        try {
            const docRef = doc(db, user.email, year);
            await setDoc(docRef, documents );
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }, [documents, user.email]);

    const handleDeleteClick = useCallback((item) => {
        if (documents[choiceMonth][item]) {
            delete documents[choiceMonth][item];
            dispatch(reduxData(documents));
            saveDataToFirestore();
        }
        else return console.log("Brak danych do usunięcia ");
    }, [documents, choiceMonth, dispatch, saveDataToFirestore]);

    return (
                <tr>
                    <td className="col"> { index + 1 } </td>
                    <td className="col"> { date } </td>
                    <td className="col"> { sum + " zł" } </td>
                    <td className="col"> { total.toFixed(2) + " zł" } </td>
                    <td className="col">
                        <span className="material-symbols-outlined delete-icon" onClick={()=> handleDeleteClick( date.slice(-2) ) }>delete</span>
                    </td>
                </tr>
    )
}