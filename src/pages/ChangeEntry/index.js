import {
    Button,
    Form,
    Input,
  } from "../../components/formsComponents";
  import Header from "../NewEntry/style";
  import Container from "../../components/Container";
  import { ThreeDots } from "react-loader-spinner";
  import { useEffect, useState } from "react";
  import api from "../../services/api";
  import { useNavigate } from "react-router";
  import {useParams} from "react-router-dom"
  import useAuth from "../../hooks/useAuth";



  
  export default function ChangeEntry() {
    const {idEntry} = useParams()
    const {auth} = useAuth();
    const navigate = useNavigate();
    const [entry, setEntry] = useState(null)
    const [formData, setFormData] = useState({ value: "", description: "" });
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect( async()=> {
      try {
        const promisse = await api.getEntryById(idEntry, auth).then((response) => {
          setEntry(response.data)
          setFormData({ value: response.data.value, description: response.data.description })

        })
        
      } catch (error) {
        
      }
    }, [])
    if(entry === null){
      return <h1>Loading Entry infos...</h1>
    }

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
        await api.registerChange({ ...formData, type: entry.type },idEntry, auth);
        setIsLoading(false);
        navigate("/wallet");
      } catch (error) {
        setIsLoading(false);
        alert(error.response.data);
      }
    }
    return (
      <Container>
        <Header>Editar { entry.type === "in" ? "entrada" : "saída"}</Header>
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
              `Salvar ${entry.type === "in" ? "entrada" : "saída"}`
            )}
          </Button>
        </Form>
      </Container>
    );
  }
  
  