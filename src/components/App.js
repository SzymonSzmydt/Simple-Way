import { Header } from "../pages/header/Header";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import { Home } from "../pages/home/Home";
import { Main } from "./Main";
import { RegisterWindow } from "../pages/login/RegisterWindow";
import { LoginWindow } from "../pages/login/LoginWindow";
import { AddSeller } from "./ui/seller/AddSeller";
import { Record } from "./ui/record/Record";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

export function App() {
  return (
    <div className='app'>
      <UserAuthContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginWindow />} />
          <Route path='/register' element={<RegisterWindow />} />
          <Route
            path='/application'
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />
          <Route
            path='/add'
            element={
              <ProtectedRoute>
                <AddSeller />
              </ProtectedRoute>
            }
          />
          <Route
            path='/application/general'
            element={
              <ProtectedRoute>
                <Record />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Home />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}
