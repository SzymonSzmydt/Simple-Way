import { Navigate } from "react-router-dom"
import {useUserAuth} from "../context/UserAuthContext";

export const ProtectedRoute = ({ children }) => {
    const {user} = useUserAuth();
    if (!user) {
        return <Navigate to="/" />
    }
    return children

}