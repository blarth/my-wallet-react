import React from 'react';
import { Link } from 'react-router-dom';
import {
  TextValue,
  Description,
  TextDate,
  Container,
} from "./style"


export default function Entry({_id, value, description, type, date}) {
  
  return (
      <Link to={`/entrie/${_id}`}> 
        <Container>
          <TextDate>{date}</TextDate>
          <Description>{description}</Description>
          <TextValue type={type}>{value}</TextValue>
        </Container>
      </Link>
  );
}
