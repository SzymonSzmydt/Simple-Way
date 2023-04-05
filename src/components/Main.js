import { doc, getDoc } from "firebase/firestore";
import { db } from "../context/firebase";
import { useEffect, useReducer, useCallback, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Window } from "./windows/Window";
import { LoadingSpinner } from "./LoadingSpinner";
import { Record } from "./ui/record/Record";
import { AddSeller } from "./ui/seller/AddSeller";
import { useNavigate } from "react-router-dom";
import { reduxKeys } from "./../redux/documentsSlice";
import { useDispatch } from "react-redux";

const initialState = {
  userData: {},
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "userValues":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "loading":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      throw new Error(`Unknow action type ${state}`);
  }
}

export function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userData, isLoading } = state;
  const { user } = useUserAuth();
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();

  const [documents, setDocuments] = useState([]);

  const uploadUserData = useCallback(async () => {
    const docRef = doc(db, user.email, "users");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch({
        type: "userValues",
        field: "userData",
        payload: docSnap.data(),
      });
      dispatch({
        type: "loading",
        payload: true,
      });
    } else {
      navigate("/add");
    }
  }, [navigate, user.email]);

  useEffect(() => {
    if (documents.length < 1) {
      uploadUserData();
    }
  }, [documents, uploadUserData]);

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

  console.log(documents);

  return (
    <Window>
      {isLoading ? (
        userData && documents ? (
          <Record setDocuments={setDocuments} documents={documents} />
        ) : (
          <AddSeller />
        )
      ) : (
        <LoadingSpinner />
      )}
    </Window>
  );
}
