import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import {Login, Register, Wallet} from "./pages";


export default function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}