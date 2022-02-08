import styled from "styled-components";
import {Link} from "react-router-dom"

const ContainerMenu = styled.div`
  width: 90%;
  height: 70px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NameUser = styled.p`
  color: #ffffff;
  font-family: Raleway;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  text-align: left;
`;

const Icon = styled.img`
  max-width: 25px;
`;
const ContainerWallet = styled.div`
  height: 446px;
  width: 90%;
  border-radius: 5px;
  background: #ffffff;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const ContainerEntries = styled.div`
  width: 90%;
  height: 130px;
  margin-bottom: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #8c11be;
  gap: 15px;
`;

const In = styled.div`
  height: 114px;
  width: 155px;
  border-radius: 5px;
  background: #a328d6;
  

  img {
    margin-top: 10px;
    margin-left: 10px;
  }
  @media screen and (max-width: 376px){
    height: 100px;
    width: 130px;
  }

`;
const Out = styled.div`
  height: 114px;
  width: 155px;
  border-radius: 5px;
  background: #a328d6;
  img {
    margin-top: 10px;
    margin-left: 10px;
  }
  @media screen and (max-width: 376px){
    height: 100px;
    width: 130px;
  }
`;

const NewEntrie = styled.p`
  font-family: Raleway;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  text-align: left;
  color: #ffffff;
  height: 40px;
  width: 64px;
  margin-top: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 376px){
    padding-bottom: 20px;
  }
`;

const ContainerBalance = styled.div`
  width: 90%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  left: 15px;

  span {
    font-family: Raleway;
    font-size: 17px;
    font-weight: 700;
    color: #000000;
  }
`;

const Balance = styled.p`
  font-family: Raleway;
  font-size: 17px;
  font-weight: 400;
  text-align: right;
  color: ${(props) =>
    props.balanceType === "positive" ? "#03AC00" : "#C70000"};
`;
const Button = styled(Link)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;

  padding: 10px;
  
  background: #A328D6;
  border-radius: 5px;
  
`;

export {
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
    Button
}