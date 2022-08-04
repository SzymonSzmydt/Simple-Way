import {useLocation} from 'react-router-dom';
import "./css/general.css";
import {useEffect, useState} from "react";
import {Window} from "../windows/Window";
import {GeneralHeader} from "./GeneralHeader";
import {GeneralDocuments} from "./GeneralDocuments";
import {New} from "./New";
import {useUserAuth} from "../../context/UserAuthContext";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../context/firebase";

export function General() {
    const location = useLocation();
    const myUser = location.state["myUser"];

    const monthsText = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
    const monthDigit = new Date().getMonth().toLocaleString();
    const defaultMonth = monthsText[monthDigit];

    const [ choiceMonth, setChoiceMonth ] = useState(defaultMonth);
    const [ documents, setDocuments ] = useState([]);

    const { user } = useUserAuth();
    const year = new Date().getFullYear().toLocaleString();

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, user.email, year);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setDocuments([
                    ...documents,
                    docSnap.data()
                ]);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        return () => fetchData();
    },[]);

    const [ totalMonth, setTotalMonth ] = useState(0);
    const [ addProductButton, setAddProductButton ] = useState(false);

    const whenAddingNewProduct =
        addProductButton ?
            <New setAddProductButton={setAddProductButton} documents={documents}/>
            : <GeneralHeader myUser={myUser} setAddProductButton={setAddProductButton} setChoiceMonth={setChoiceMonth} choiceMonth={choiceMonth} totalMonth={totalMonth}/>;
    const copy = {documents};
    return (
        <Window>
            <div>
                { whenAddingNewProduct }
                <GeneralDocuments documents={copy} setTotalMonth={setTotalMonth} choiceMonth={choiceMonth} />
            </div>
        </Window>
    )
}