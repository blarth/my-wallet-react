import Logout from "../../assets/img/Vector.png"
import Plus from "../../assets/img/ant-design_minus-circle-outlined.png"
import Minus from "../../assets/img/ant-design_minus-circle-outlined.png"
import { useNavigate } from "react-router-dom";
import { useState, useEffect, } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";
import { Container } from "../../components/formsComponents";
import Entry from "./Entry";

export default function Wallet() {
    const { auth } = useAuth();
    const [entries, setEntries] = useState([]);
    
    async function loadEntries() {
        
        try {
            const promise =  await api.getEntries(auth).then((response) => {
                setEntries(response.data);
                
              });
        } catch (error) {
            console.log(error.response)
        }
        
    }

    useEffect(loadEntries, []);
    
   

  return (
    <Container>
        <ContainerMenu>
            <NameUser>SomeUser</NameUser>
            <Icon src={Logout} alt="erro"></Icon>
        </ContainerMenu>
        <ContainerWallet>
            {entries.length === 0 ? "Não há registros de entrada ou saída" : entries?.map((entry, i) => {
                return <Entry 
                key={i}
                {...entry}
                 />
            }) }
        </ContainerWallet>
        <ContainerEntries>
            <In>
                <img src={Plus} alt="erro"></img>
                <NewEntrie>Nova entrada</NewEntrie>
            </In>
            <Out>
            <img src={Minus} alt="erro"></img>
                <NewEntrie>Nova saída</NewEntrie>
            </Out>
        </ContainerEntries>
    </Container>
    )
}

const ContainerMenu = styled.div`
width : 90%;
height: 70px;
margin-top: 15px;
display: flex;
justify-content: space-between;
align-items: center;

`;
const NameUser = styled.p`
color: #FFFFFF;
font-family: Raleway;
font-size: 26px;
font-style: normal;
font-weight: 700;
text-align: left;

`

const Icon = styled.img`
max-width: 25px;

`
const ContainerWallet = styled.div`
height: 446px;
width: 90%;
border-radius: 5px;
background: #FFFFFF;

`;

const ContainerEntries = styled.div`
width: 90%;
height: 130px;
margin-bottom: 16px;
margin-top: 16px;
display: flex;
align-items: center;
justify-content: center;
background : #8C11BE;
gap: 15px;
`;

const In = styled.div`
height: 114px;
width: 155px;
border-radius: 5px;
background: #A328D6;

    img{
        margin-top: 10px;
        margin-left: 10px;
    }


`;
const Out = styled.div`
height: 114px;
width: 155px;
border-radius: 5px;
background: #A328D6;
img{
        margin-top: 10px;
        margin-left: 10px;
    }

`;

const NewEntrie = styled.p`
font-family: Raleway;
font-size: 17px;
font-style: normal;
font-weight: 700;
text-align: left;
color: #FFFFFF;
height: 40px;
width: 64px;
margin-top: 30px;
margin-left: 10px;
margin-bottom: 10px;
`;