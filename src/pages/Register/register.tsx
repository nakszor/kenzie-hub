import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { RegisterPage } from "./style";
import { AuthContext } from "../../contexts/index";
import "../../components/colors/colors.css";
import Input from "../../components/input/style";
import Button from "../../components/button/style";
import Select from "../../components/select/styles";
import ErrorMessage from "../../components/errorMessage/style";
import { validationRegister } from "../../schema";
import { objectregister } from "../../types/types";

function Register() {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("@hub:token")) {
      navigate("/Dashboard");
    }
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<objectregister>({
    resolver: yupResolver(validationRegister),
  });

  return (
    <RegisterPage>
      <header className="title">
        <Link className="link" to="/">
          <h1>Kenzie Hub</h1>
          <button>Voltar</button>
        </Link>
      </header>
      <form onSubmit={handleSubmit(registerUser)} method="post">
        <div className="text">
          <h3>Crie Sua Conta</h3>
          <p>Rápido e grátis, vamos nessa</p>
        </div>
        <div className="container">
          <label htmlFor="email">E-mail</label>
          <Input
            type="email"
            id="email"
            placeholder="Digite aqui seu e-mail"
            {...register("email")}
          ></Input>
          <ErrorMessage className="error-message">
            {errors.email?.message}
          </ErrorMessage>
          <label htmlFor="name">Nome</label>
          <Input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          ></Input>
          <ErrorMessage className="error-message">
            {errors.name?.message}
          </ErrorMessage>
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          ></Input>
          <ErrorMessage className="error-message">
            {errors.password?.message}
          </ErrorMessage>

          <label htmlFor="confirmPassword">Confirme sua senha</label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Digite novamente sua senha"
          ></Input>

          <label htmlFor="bio">Bio</label>
          <Input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          ></Input>
          <ErrorMessage className="error-message">
            {errors.bio?.message}
          </ErrorMessage>
          <label htmlFor="contact">Contato</label>
          <Input
            type="text"
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          ></Input>
          <ErrorMessage className="error-message">
            {errors.contact?.message}
          </ErrorMessage>
          <Select id="modules" {...register("course_module")}>
            <option></option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </Select>
          <ErrorMessage className="error-message">
            {errors.course_module?.message}
          </ErrorMessage>
          <Button className="register-btn" type="submit">
            Cadastrar
          </Button>
        </div>
      </form>
    </RegisterPage>
  );
}
export default Register;
