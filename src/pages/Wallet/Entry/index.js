import React from 'react';
import styled from 'styled-components';


export default function Entry({_id, value, description, type, date}) {
  
  return (
    <Container>
      <TextDate>{date}</TextDate>
      <Description>{description}</Description>
      <TextValue type={type}>{value}</TextValue>
    </Container>
  );
}

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