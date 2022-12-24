import { doc, getDoc } from "firebase/firestore";
import {db} from "../context/firebase";
import {useEffect, useReducer, useCallback} from "react";
import {useUserAuth} from "../context/UserAuthContext";
import {Window} from "./windows/Window";
import {LoadingSpinner} from "./LoadingSpinner";
import { Record } from './ui/record/Record';
import { AddSeller } from './seller/AddSeller';
import { reduxData, reduxKeys } from './../redux/documentsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const initialState = {
    userData: {},
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

export function Main() {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { userData, isLoading } = state;
    const { user } = useUserAuth();
    const navigate = useNavigate();
    const reduxDispatch = useDispatch();

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
            navigate("/add");
        }
    }, [navigate, user.email]);

    useEffect( () => {
        uploadUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = useCallback(async () => {
        const year = new Date().getFullYear().toLocaleString();
        const docRef = doc(db, user.email, year);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            reduxDispatch( reduxData(docSnap.data()) );
            reduxDispatch( reduxKeys(docSnap.data()) );
        } else {
            console.log("Dane nie zostały wczytane, utwórz użytkownika");
        }
    }, [user.email, reduxDispatch]);

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
            <Window>
                { isLoading ? 
                userData ? <Record /> : 
                <AddSeller/>
                 : <LoadingSpinner /> }
            </Window>
    )
}