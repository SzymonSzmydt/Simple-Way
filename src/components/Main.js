import { doc, getDoc } from "firebase/firestore";
import { db } from "../context/firebase";
import { useEffect, useCallback, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Window } from "./windows/Window";
import { LoadingSpinner } from "./LoadingSpinner";
import { Record } from "./ui/record/Record";
import { reduxKeys } from "./../redux/documentsSlice";
import { useDispatch } from "react-redux";

export function Main() {
  const { user } = useUserAuth();
  const reduxDispatch = useDispatch();

  const [documents, setDocuments] = useState([]);

  const fetchData = useCallback(async () => {
    const year = new Date().getFullYear().toLocaleString();
    const docRef = doc(db, user.email, year);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDocuments([docSnap.data()]);
      reduxDispatch(reduxKeys(docSnap.data()));
    } else {
      console.log("Brak danych dla podanego roku");
    }
  }, [reduxDispatch, user.email]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Window>
      {user ? (
        <Record setDocuments={setDocuments} documents={documents} />
      ) : (
        <LoadingSpinner />
      )}
    </Window>
  );
}
