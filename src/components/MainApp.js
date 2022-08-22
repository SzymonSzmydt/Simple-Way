import { doc, getDoc } from "firebase/firestore";
import {db} from "../context/firebase";
import {useEffect, useState} from "react";
import {useUserAuth} from "../context/UserAuthContext";
import {Window} from "./windows/Window";
import {LoadingSpinner} from "./LoadingSpinner";
import { General } from './generalApp/General';
import { AddSeller } from './seller/AddSeller';

export function MainApp() {
    const [ userData, setUserData ] = useState({});// props
    const [ isLoading, setIsLoading ] = useState(false);

    const { user } = useUserAuth();

    useEffect( () => {
        const uploadUserData = async () => {
            const docRef = doc(db, user.email, "users");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setUserData(docSnap.data());
                setIsLoading(true);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        return () => uploadUserData();
    }, []);

    const [ documents, setDocuments ] = useState([]);
    const year = new Date().getFullYear().toLocaleString();

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, user.email, year);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setDocuments([docSnap.data()]);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        return () => fetchData();
    },[]);

    return (
            <Window>
                { isLoading ? 
                userData ? documents ? <General documents={documents} setDocuments={setDocuments}/> : <AddSeller/>
                 : <LoadingSpinner /> : <LoadingSpinner /> }
            </Window>
    )
}