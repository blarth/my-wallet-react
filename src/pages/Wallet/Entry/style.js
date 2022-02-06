import styled from "styled-components";


const Container = styled.div`
width: 90%;
display: flex;
margin-top: 23px;
margin-left: 12px;

`;

const TextDate = styled.p`
width: 48px;
font-family: Raleway;
font-size: 16px;
font-weight: 400;
text-align: left;
color: #C6C6C6;
margin-right: 5px;

`;

const Description = styled.p`
width: 145px;
font-family: Raleway;
font-size: 16px;
font-weight: 400;
line-height: 19px;
color: #000000;

`;

const TextValue = styled.p`
width: 62px;
font-family: Raleway;
font-size: 16px;
font-weight: 400;
text-align: right;
color: ${(props) => props.type === "in" ? "#03AC00" : "#C70000"};
padding-left: 70px;
`;

export {
    TextValue,
    Description,
    TextDate,
    Container,
}