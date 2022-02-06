import Logout from "../../assets/img/Vector.png";
import Plus from "../../assets/img/ant-design_minus-circle-outlined.png";
import Minus from "../../assets/img/ant-design_minus-circle-outlined.png";
import { useState, useEffect } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Container from "../../components/Container";
import Entry from "./Entry";
import { Link, useNavigate } from "react-router-dom";
import {
  Balance,
  ContainerBalance,
  NewEntrie,
  Out,
  In,
  ContainerEntries,
  ContainerWallet,
  Icon,
  NameUser,
  ContainerMenu,
} from "./style"

export default function Wallet({nameUser}) {
  const { auth, login } = useAuth();
  const [entries, setEntries] = useState([]);
  const [balance, setBalance] = useState(0);
  const [balanceType, setBalanceType] = useState("positive");
  const navigate = useNavigate()

  function logout() {
    login("");
    navigate("/")
  }

  async function loadEntries() {
    try {
      const promise = await api.getEntries(auth).then((response) => {
        setEntries(response.data);
        loadBalance(response.data)
      });
    } catch (error) {
      console.log(error.response);
    }
  }
  function loadBalance(data) {
    const accbalance = data?.reduce((acc, entry) => {
        
        return entry.type === "in" 
        ? (acc + parseFloat(entry.value.replace(',' , ".")))
        : (acc - parseFloat(entry.value.replace(',' , ".")));
        
    }, 0)
    
    if (accbalance < 0) {
        setBalanceType("negative");
      }
    
    return setBalance(accbalance.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"}));
  
  }
  
  useEffect(loadEntries, [])

  return (
    <Container>
      <ContainerMenu>
        <NameUser>Olá {nameUser}</NameUser>
        <Icon src={Logout} alt="erro" onClick={logout}></Icon>
      </ContainerMenu>
      <ContainerWallet>
        {entries.length === 0
          ? "Não há registros de entrada ou saída"
          : entries?.map((entry, i) => {
              return <Entry key={i} {...entry} loadEntries={loadEntries}/>;
            })}
        <ContainerBalance>
          <span>SALDO</span>
          <Balance balanceType={balanceType}>{balance}</Balance>
        </ContainerBalance>
      </ContainerWallet>
      <ContainerEntries>
        <Link to="/in">
          <In>
            <img src={Plus} alt="erro"></img>
            <NewEntrie>Nova entrada</NewEntrie>
          </In>
        </Link>
        <Link to="/out">
          <Out>
            <img src={Minus} alt="erro"></img>
            <NewEntrie>Nova saída</NewEntrie>
          </Out>
        </Link>
      </ContainerEntries>
    </Container>
  );
}
