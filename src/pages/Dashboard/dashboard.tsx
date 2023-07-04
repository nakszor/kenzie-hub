import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useContext } from "react";
import { DashboardPage } from "./style";
import { EmptyList } from "./emptyList/style";
import { useNavigate, Navigate } from "react-router-dom";

import Input from "../../components/input/style";
import Button from "../../components/button/style";
import Select from "../../components/select/styles";
import Modal from "react-modal";
import ErrorMessage from "../../components/errorMessage/style";
import { FaTrashAlt } from "react-icons/fa";
import api from "../../services/api";
import Flatlist from "flatlist-react";
import { AuthContext } from "../../contexts";
Modal.setAppElement("#root");
import { tech } from "../../types/types";

import { validationTech } from "../../schema/index";
import { responsetech } from "../../types/types";

function Dashboard() {
  const {
    setProfile,
    token,
    profile,
    closeModal,
    openModal,
    modalIsOpen,
    createTech,
    deleteTech,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("@hub:token")) {
      navigate("/");
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tech>({
    resolver: yupResolver(validationTech),
  });

  function logOut() {
    localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      try {
        setProfile(response.data);
      } catch (error) {
        console.log(response);
      }
    };
    fetchData();
  }, [profile?.techs]);

  return (
    <DashboardPage>
      {modalIsOpen && (
        <div className="modalbg">
          <div className="modal-content">
            <div className="modal-header">
              <p>Cadastrar tecnologia</p>
              <button className="modal-close" onClick={closeModal}>
                X
              </button>
            </div>
            <div className="modalcontainer">
              <form onSubmit={handleSubmit(createTech)} method="post">
                <label htmlFor="title">Nome</label>
                <Input
                  type="text"
                  id="title"
                  placeholder="Digite a tecnologia"
                  {...register("title")}
                ></Input>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                <label htmlFor="status">Selecionar Status</label>
                <Select id="status" {...register("status")}>
                  <option value=""></option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </Select>
                <ErrorMessage>{errors.status?.message}</ErrorMessage>
                <Button>Cadastrar Tecnologia</Button>
              </form>
            </div>
          </div>
        </div>
      )}
      <header className="title">
        <div>
          <h1>Kenzie Hub</h1>

          <button onClick={logOut}>Sair</button>
        </div>
      </header>
      <section className="text">
        <h3>Olá {profile?.name}</h3>
        <p>{profile?.course_module}</p>
      </section>
      <div className="line"></div>
      <main>
        <div className="content">
          <p>Tecnologias</p>
          <button onClick={openModal}>+</button>
        </div>
        <ul>
          <Flatlist
            list={profile?.techs}
            renderItem={(item: responsetech) => (
              <li key={item.id}>
                <p>{item.title}</p>
                <div>
                  <p className="p1">{item.status}</p>
                  <FaTrashAlt onClick={() => deleteTech(item.id)} />
                </div>
              </li>
            )}
            renderWhenEmpty={() => <EmptyList>Adicione suas stacks!</EmptyList>}
          />
        </ul>
      </main>
    </DashboardPage>
  );
}
export default Dashboard;
