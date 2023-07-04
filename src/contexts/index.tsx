import React, { useState, ReactNode, createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../services/api";
import { loginData, loginResponse } from "../types/types";
import { AuthContextType } from "./AuthType";
import { objectlogin, objectregister, tech } from "../types/types";
import { toast } from "react-toastify";

interface children {
  children: ReactNode;
}
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthProvider = ({ children }: children) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<loginData | null>(null);

  const login = async (data: objectlogin) => {
    const response = await api
      .post<loginResponse>("sessions", data)
      .then((response) => {
        localStorage.setItem("@hub:token", response.data.token);
        localStorage.setItem("@hub:user_id", response.data.user.id);
        navigate("/Dashboard");
        toast.success("Login bem sucedido!");
      })
      .catch(() => {
        toast.error("Login mal sucedido!");
      });
  };

  const registerUser = async (data: objectregister) => {
    const response = await api
      .post("users", data)
      .then(() => {
        navigate("/");
        toast.success("Cadastro Realizado!");
      })
      .catch(() => {
        toast.error("Erro ao cadastrar!");
      });
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const token = localStorage.getItem("@hub:token") || "";

  const createTech = async (data: tech) => {
    const response = await api
      .post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        closeModal();
        toast.success("Tecnologia adicionada com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao adicionar Tecnologia!");
      });

    return response;
  };

  const deleteTech = (id: string) => {
    api
      .delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia deletada!");
      })
      .catch(() => {
        toast.error("Erro ao deletar tecnologia!");
      });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        registerUser,
        modalIsOpen,
        profile,
        setProfile,
        openModal,
        closeModal,
        token,
        createTech,
        deleteTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
