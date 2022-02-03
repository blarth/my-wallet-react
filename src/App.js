import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import {Login, Register, Wallet, NewEntry} from "./pages";
import { useState } from "react";


export default function App() {
  const [nameUser, setNameUser] = useState("")

  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login setNameUser={setNameUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/wallet" element={<Wallet nameUser={nameUser} />} />
            <Route path="/in" element={<NewEntry />} />
            <Route path="/out" element={<NewEntry />} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}