import { Link, useNavigate } from "react-router-dom";
import { Login } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts";
import "../../components/colors/colors.css";
import Header from "../../components/header/style";
import Main from "../../components/main/style";
import Input from "../../components/input/style";
import Button from "../../components/button/style";
import ErrorMessage from "../../components/errorMessage/style";
import Container from "../../components/container/style";
import { validationLogin } from "../../schema/index";
import { objectlogin } from "../../types/types";

function LoginPage() {
  const { login } = useContext(AuthContext);
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
  } = useForm<objectlogin>({
    resolver: yupResolver(validationLogin),
  });

  return (
    <Login>
      <Header>
        <h1>Kenzie Hub</h1>
      </Header>
      <Main>
        <Container>
          <form onSubmit={handleSubmit(login)}>
            <h3>Login</h3>
            <div>
              <label htmlFor="email">E-mail</label>
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                id="email"
                {...register("email")}
              ></Input>

              <ErrorMessage>{errors.email?.message}</ErrorMessage>

              <label htmlFor="password">Senha</label>
              <Input
                type="password"
                placeholder="Digite sua senha"
                id="password"
                {...register("password")}
              ></Input>
              <ErrorMessage>{errors.password?.message}</ErrorMessage>

              <Button type="submit">Entrar</Button>
            </div>
          </form>
          <div className="not-registered">
            <span>Ainda não possui uma conta?</span>
            <Link className="link" to="/Register">
              <Button>Cadastre-se </Button>
            </Link>
          </div>
        </Container>
      </Main>
    </Login>
  );
}
export default LoginPage;
