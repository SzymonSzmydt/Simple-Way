import {MainCompany} from "./MainCompany";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../context/firebase";
import {useEffect, useState} from "react";
import {useUserAuth} from "../context/UserAuthContext";
import {Window} from "./windows/Window";

export function MainApp() {
    const [ userData, setUserData ] = useState([]);             // props
    const [ selectedUser, setSelectedUser ] = useState({});     // Data from firebase

    const { user } = useUserAuth();

        const uploadUserData = async () => {
                const querySnapshot = await getDocs(collection(db, `${user.email}`));
                    querySnapshot.forEach((doc) => {
                    setUserData( prevState => [ ...prevState, {id: doc.id, data: doc.data() } ] );
                });
            }

         useEffect(() => {
            uploadUserData();
        }, []);

    return (
            <Window>
                <MainCompany userData={userData} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            </Window>
    )
}