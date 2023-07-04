import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import * as yup from "yup";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const validationLogin = yup.object().shape({
    email: yup.string().required("E-mail é obrigatório!"),
    password: yup.string().required("Senha é obrigatória!"),
  });

  const userData = async (data: object) =>
    await api
      .post("sessions", data)
      .then((response) => {
        localStorage.setItem("@hub:token", response.data.token);
        localStorage.setItem("@hub:user_id", response.data.user.id);
        navigate("/Dashboard");
        window.alert("Login bem sucedido");
      })
      .catch(() => {
        window.alert("Login mal sucedido");
      });

  //REGISTER

  const validationRegister = yup.object().shape({
    email: yup.string().required("E-mail é obrigatório!"),
    password: yup
      .string()
      .required("Senha é obrigatória!")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "A senha precisa ter no mínimo 8 caracteres, " +
          "uma letra maiúscula e uma letra minúscula, " +
          "um número e um caracter especial."
      ),
    name: yup.string().required("Nome é obrigatório!"),
    bio: yup.string().required("Bio é obrigatório!"),
    contact: yup.string().required("Contato é obrigatório!"),
    course_module: yup.string().required("Módulo é obrigatório"),
  });

  const userRegister = async (data: object) => {
    const response = await api.post("users", data);
    try {
      navigate("/");
    } catch {
      window.alert("mal sucedido");
    }
  };

  //Dashboard

  const [modalIsOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState({});

  const validationTech = yup.object().shape({
    title: yup.string().required("Escolha a tecnologia!"),
    status: yup.string().required("Escolha o nível de habilidade!"),
  });

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const tokens = localStorage.getItem("@hub:token");

  const techData = async (data: object) =>
    await api.post("users/techs", data, {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    });
  try {
    closeModal();
  } catch {
    window.alert(" mal sucedido");
  }

  function deleteTech(id: string) {
    api.delete(`users/techs/${id}`, {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    });
    try {
      window.alert(" bem sucedido");
    } catch {
      window.alert("mal sucedido");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        validationLogin,
        userData,
        validationRegister,
        userRegister,
        modalIsOpen,
        setIsOpen,
        profile,
        setProfile,
        validationTech,
        openModal,
        closeModal,
        tokens,
        techData,
        deleteTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
