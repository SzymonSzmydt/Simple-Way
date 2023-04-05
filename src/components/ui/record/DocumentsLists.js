import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../context/firebase";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useCallback } from "react";

export function DocumentsLists({
  date,
  sum,
  index,
  choiceMonth,
  total,
  setDocuments,
  documents,
}) {
  const { user } = useUserAuth();
  const document = JSON.parse(JSON.stringify(documents));

  const saveDataToFirestore = useCallback(async () => {
    const year = new Date().getFullYear().toLocaleString();
    try {
      const docRef = doc(db, user.email, year);
      await setDoc(docRef, document);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }, [document, user.email]);

  const handleDeleteClick = useCallback(
    (item) => {
      const num = item[0] === "0" ? item[1] : item;
      if (document[choiceMonth][num]) {
        delete document[choiceMonth][num];
        setDocuments(documents[choiceMonth].filter((e) => e !== num));

        saveDataToFirestore();
      } else return console.log("Brak danych do usunięcia ");
    },
    [document, choiceMonth, setDocuments, documents, saveDataToFirestore]
  );

  return (
    <tr className='tr__row'>
      <td className='coll'> {index + 1} </td>
      <td className='coll'> {date} </td>
      <td className='coll'> {sum + " zł"} </td>
      <td className='coll'> {total.toFixed(2) + " zł"} </td>
      <td className='coll'>
        <div
          className='symbol symbol__delete delete-icon'
          onClick={() => handleDeleteClick(date.slice(-2))}
        />
      </td>
    </tr>
  );
}
