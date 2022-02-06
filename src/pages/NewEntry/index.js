import {
  Button,
  Form,
  Input,
  
} from "../../components/formsComponents";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import api from "../../services/api";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Container from "../../components/Container";
import Header from "./style";

export default function NewEntry() {
  const { auth} = useAuth();
  const navigate = useNavigate();
  const pathname = useLocation().pathname.replace("/", "");
  const [formData, setFormData] = useState({ value: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const validationValue = /^[0-9]*\,[0-9]{2}$/.test(formData.value);

    if (!validationValue) {
      alert("Value must be in the format (100,00)");
      return;
    }

    setIsLoading(true);
    try {
      await api.registerTransaction({ ...formData, type: pathname }, auth);
      setIsLoading(false);
      navigate("/wallet");
    } catch (error) {
      setIsLoading(false);
      alert(error.response.data);
    }
  }
  return (
    <Container>
      <Header>Nova {pathname === "in" ? "entrada" : "saída"}</Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Valor"
          name="value"
          onChange={handleChange}
          value={formData.value}
          disabled={isLoading}
          required
        />
        <Input
          type="text"
          placeholder="Descrição"
          name="description"
          onChange={handleChange}
          value={formData.description}
          disabled={isLoading}
          required
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots
              type="ThreeDots"
              color="#FFFFFF"
              height={50}
              width={50}
            />
          ) : (
            `Salvar ${pathname === "in" ? "entrada" : "saída"}`
          )}
        </Button>
      </Form>
    </Container>
  );
}
