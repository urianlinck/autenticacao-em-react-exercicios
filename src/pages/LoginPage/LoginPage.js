import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";
import axios from "axios";
import { useState } from "react";
import {baseURL} from "../../constants/baseURL"
import useForm from "../../hooks/useForm.js";

function LoginPage() {
  const navigate = useNavigate();
  const {form, onChangeForm} = useForm({email:"", password:""})

  const logar = (e)=>{
    e.preventDefault()

    axios.post(`${baseURL}/user/login`, form)
    .then((resposta)=>{
      localStorage.setItem("token",resposta.data.token)
      goToFeed(navigate)

    })
    .catch((error)=>{
    console.log(error.response)
    
  })
  }
  
  return (
    <main>
      <h1 >Login</h1>
      <FormContainer onSubmit={logar}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            name="email"
            value={form.email}
            id="email"
            required
            onChange={onChangeForm}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            name="password"
            value={form.password}
            id="password"
            required
            onChange={onChangeForm}
          />
        </InputContainer>
        <button>Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;
