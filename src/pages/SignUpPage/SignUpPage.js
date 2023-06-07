import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";
import axios from "axios";
import { useState } from "react";
import {baseURL} from "../../constants/baseURL"
import useForm from "../../hooks/useForm";

function SignUpPage() {
  const navigate = useNavigate();
  const {form, onChangeForm} = useForm({name:"", email:"", password:""})

  const cadastrar = (e) => {
    e.preventDefault()

    axios.post(`${baseURL}/user/signup`, form)
    .then((resposta)=>{
      localStorage.setItem("token",resposta.data.token)
      goToFeed(navigate)
    })
    .catch((error)=>{
    console.log(error.response)
  })
    
    
  };
  

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={cadastrar}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input name="name" value={form.name} id="name" required onChange={onChangeForm}/>
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input name="email" value={form.email} id="email" required onChange={onChangeForm}/>
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input name="password" value={form.password} id="password" required onChange={onChangeForm}/>
        </InputContainer>

        <button>Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;
