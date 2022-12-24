import {Header} from "../pages/header/Header";
import {UserAuthContextProvider} from "../context/UserAuthContext";
import {Home} from "./home/Home";
import { Main } from "./Main";
import {RegisterWindow} from "./login/RegisterWindow";
import {LoginWindow} from "./login/LoginWindow";
import {AddSeller} from "./ui/seller/AddSeller";
import {General} from "./generalApp/General";
import {Routes, Route} from "react-router-dom";
import {ProtectedRoute} from "./ProtectedRoute";

export function App() {
  return (
    <div className="app">
        <UserAuthContextProvider>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <LoginWindow/> } />
                <Route path="/register" element={ <RegisterWindow/> } />
                <Route path="/application" element={
                    <ProtectedRoute>
                        <Main />
                    </ProtectedRoute>
                }/>
                <Route path="/add" element={
                    <ProtectedRoute>
                        <AddSeller />
                    </ProtectedRoute>
                } />
                <Route path="/application/general" element={
                    <ProtectedRoute>
                        <General />
                    </ProtectedRoute>
                } />
                <Route path="*" element={ <Home /> } />
            </Routes>
        </UserAuthContextProvider>
    </div>
  );
}