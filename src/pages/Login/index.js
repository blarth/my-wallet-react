import { useNavigate } from "react-router-dom";
import {BallTriangle} from 'react-loader-spinner';
import { useState } from "react";
import Logo from "../../assets/img/MyWallet.png";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Container, Form, Input, Button, StyledLink } from "../../components/formsComponents";
import styled from "styled-components";

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false);
  const { auth, login } = useAuth();
  const navigate = useNavigate();


  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    
    try {
        await api.login({ ...formData }).then((response) => {
          
          login(response.data);
        })
        
        setIsLoading(false);
        
        navigate("/wallet")
        
    } catch (error) {
        setIsLoading(false);

      alert('Erro, tente novamente');
    }
  }

  return (
    <Container>
      <StyledLogo src={Logo}></StyledLogo>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
          value={formData.email}
          disabled={isLoading}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleChange}
          value={formData.password}
          disabled={isLoading}
          required
        />

        <Button type="submit" disabled={isLoading}>
          {
            isLoading
              ? <BallTriangle color="#00BFFF" height={50} width={50} />
              : "Entrar"
          }
        </Button>
      </Form>

      <StyledLink to="/register">
      Primeira vez? Cadastre-se!
      </StyledLink>
    </Container>
  );
}

const StyledLogo = styled.img`
width: 150px;
`;