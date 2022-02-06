import Swal from "sweetalert2"
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextValue,
  Description,
  TextDate,
  Container,
  DeleteSymbol,
} from "./style"
import api from "../../../services/api"
import useAuth from "../../../hooks/useAuth";


export default function Entry({_id, value, description, type, date, loadEntries}) {
  const { auth } = useAuth();
  const navigate = useNavigate()

  async function handleDelete(){
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const promisse = await api.deleteEntryById(_id, auth)
          Swal.fire(
            
            'Your entry has been deleted.'
          )
        }
        loadEntries()
      })
      
    } catch (error) {
      console.log(error.response)
    }
  }
  function handleNavigation(){
    navigate(`/entrie/${_id}`)
  }
  
  return (
          
      
            <Container >
              <TextDate>{date}</TextDate>
              <Description onClick={handleNavigation}>{description}</Description>
              <TextValue type={type}>{value}</TextValue>
              <DeleteSymbol onClick={handleDelete}>x</DeleteSymbol>
            </Container>
       
        
  );
}
