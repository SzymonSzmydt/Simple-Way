import {MainCompany} from "./MainCompany";
import { doc, getDoc } from "firebase/firestore";
import {db} from "../context/firebase";
import {useEffect, useState} from "react";
import {useUserAuth} from "../context/UserAuthContext";
import {Window} from "./windows/Window";

export function MainApp() {
    const [ userData, setUserData ] = useState([]);// props
    const [ isLoading, setIsLoading ] = useState(false);

    const { user } = useUserAuth();

    useEffect( () => {
        const uploadUserData = async () => {
            const docRef = doc(db, user.email, "users");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setUserData([docSnap.data()]);
                setIsLoading(true);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        return () => uploadUserData();
    }, []);

    return (
            <Window>
                { isLoading ? <MainCompany userData={userData[0]} /> : "Loading..." }
            </Window>
    )
}