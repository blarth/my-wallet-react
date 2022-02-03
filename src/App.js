import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import {Login, Register, Wallet, NewEntry} from "./pages";


export default function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/in" element={<NewEntry />} />
            <Route path="/out" element={<NewEntry />} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}