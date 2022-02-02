import styled from "styled-components";

const Input = styled.input`
  width: 340px;
  height: 55px;
  margin-bottom: 6px;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  
  font-size: 20px;
  line-height: 25px;

  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#000000"};

  &::placeholder{
    color: #000000;
  }
`;

export default Input;