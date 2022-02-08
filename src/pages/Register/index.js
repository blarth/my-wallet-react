import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {BallTriangle} from 'react-loader-spinner';
import Logo from "../../assets/img/MyWallet.png";
import api from "../../services/api";
import {  Form, Input, Button, StyledLink } from "../../components/formsComponents";
import Container from "../../components/Container";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmpassword: '' });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if(formData.password !== formData.confirmpassword){
        alert("Passwords should match")
        return
    }
    
    delete formData.confirmpassword
    
    try {
        setIsLoading(true);
        const promise = await api.signUp({
          ...formData
        }).then(() => {
            setIsLoading(false);
            navigate("/");
          })
        
    } catch (error) {
        
        setIsLoading(false);
        alert('Error, try again');
    }

    
  }

  return (
    <Container>
      <img alt="logo.svg" src={Logo} />

      <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            name="name"
            onChange={handleChange}
            value={formData.name}
            disabled={isLoading}
            required
          />
        <Input
          type="email"
          placeholder="Email"
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
        <Input
          type="password"
          placeholder="Confirme a senha"
          name="confirmpassword"
          onChange={handleChange}
          value={formData.confirmpassword}
          disabled={isLoading}
          required
        />

        <Button type="submit" disabled={isLoading}>
          {
            isLoading
              ? <BallTriangle color="#FFFFFF" height={50} width={50} />
              : "Cadastrar"
          }
        </Button>
      </Form>

      <StyledLink to="/">
        Já tem uma conta? Faça login!
      </StyledLink>
    </Container>
  );
}