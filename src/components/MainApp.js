import { doc, getDoc } from "firebase/firestore";
import {db} from "../context/firebase";
import {useEffect, useReducer, useCallback} from "react";
import {useUserAuth} from "../context/UserAuthContext";
import {Window} from "./windows/Window";
import {LoadingSpinner} from "./LoadingSpinner";
import { General } from './generalApp/General';
import { AddSeller } from './seller/AddSeller';

const initialState = {
    userData: {},
    documents: {},
    isLoading: false
}

function reducer(state, action) {
    switch (action.type) {
        case 'userValues':
            return {
                ...state,
                [action.field]: action.payload
            }
        case 'loading':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            throw new Error(`Uknow action type ${state}`)
    }
}

export function MainApp() {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { userData, documents, isLoading } = state;
    const { user } = useUserAuth();

    const uploadUserData = useCallback(async () => {
        const docRef = doc(db, user.email, "users");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            dispatch({
                type: 'userValues', field: 'userData', payload: docSnap.data() 
            });
            dispatch({
                type: 'loading', payload: true
            });
        } else {
            console.log("No such document!");
        }
    }, [user.email]);

    useEffect( () => {
        uploadUserData();
    }, []);

    const year = new Date().getFullYear().toLocaleString();

    const fetchData = useCallback(async () => {
        const docRef = doc(db, user.email, year);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            dispatch({
                type: 'userValues', 
                field: 'documents',
                payload: docSnap.data()
            });
        } else {
            console.log("No such document!");
        }
    }, [user.email, year]);

    useEffect(() => {
        fetchData();
    },[]);

    return (
            <Window>
                { isLoading ? 
                userData ? documents ? <General documents={documents} setDocuments={dispatch}/> : 
                <AddSeller/>
                 : <LoadingSpinner /> : <LoadingSpinner /> }
            </Window>
    )
}