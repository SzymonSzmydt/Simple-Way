import {Header} from "./Header/Header";
import {UserAuthContextProvider} from "../context/UserAuthContext";
import {Home} from "./home/Home";
import {MainApp} from "./MainApp";
import {RegisterWindow} from "./login/RegisterWindow";
import {LoginWindow} from "./login/LoginWindow";
import {AddSeller} from "./seller/AddSeller";
import {General} from "./generalApp/General";
import {Routes, Route, Link} from "react-router-dom";
import {ProtectedRoute} from "./ProtectedRoute";

export function App() {

  return (
    <div className="app">
        <UserAuthContextProvider>
            <Header />
            <Routes>
                {/* public routes */}
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <LoginWindow/> } />
                <Route path="/register" element={ <RegisterWindow/> } />

                {/* private routes */}
                <Route path="/application" element={
                    <ProtectedRoute>
                        <MainApp />
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

                {/* catch all */}
                <Route path="*" element={ <Home /> } />
            </Routes>
        </UserAuthContextProvider>
    </div>
  );
}