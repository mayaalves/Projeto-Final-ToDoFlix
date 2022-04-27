import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Modal from "react-modal";
import ReactStars from "react-rating-stars-component";
import * as S from "./Pages/Style";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ToDoflixlogo from "./Pages/Img/ToDoflixlogo.png";
import Login from "./Pages/Img/Login.png";
import Montanha from "./Pages/Img/Montanha.png";
import Inicio from "./Pages/Inicio";
import Todos from "./Pages/Todos";
import Favoritos from "./Pages/Favoritos";
import Vistos from "./Pages/Vistos";
import Adicionados from "./Pages/Adicionados";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}
body{
  background-color: #000000;
}
::-webkit-scrollbar{
  width: 14px;
}
::-webkit-scrollbar-track{
  background: #000000;
  border-radius: 50px;
  border: solid 2px #ffffff;
}
::-webkit-scrollbar-thumb{
  background: #000000;
  border-radius: 50px;
  border: solid 2px #2C2C2C;
}
`;
//Estilização de elemento raiz
const Nav = styled(Link)`
  text-decoration: none;
  list-style: none;
`;

export default class App extends React.Component {
  //Estado e função do menu dropdown
  state = {
    stateList: false
  };
  handleList = () => {
    this.setState({ stateList: !this.state.stateList });
  };

  //Estado e função do modal
  state = {
    stateModal: false
  };
  handleModal = () => {
    this.setState({ stateModal: true });
  };
  closeModal = () => {
    this.setState({ stateModal: false });
  };

  render() {
    return (
      <Router>
        <GlobalStyle />
        <S.Container>
          <S.BoxInicio>
            <img src={ToDoflixlogo} alt="Logo" />
            <S.Lu>
              <Nav to="/">Inicio</Nav>
            </S.Lu>
            <S.Categoria onClick={this.handleList}>
              {this.state.stateList === false ? "Categorias ▼" : "Categorias ▲"}
            </S.Categoria>
            {this.state.stateList && (
              <S.Ul>
                <Nav to="/Todos">Todos</Nav>
                <Nav to="/Favoritos">Favoritos</Nav>
                <Nav to="/Vistos">Já vistos</Nav>
                <Nav to="/Adicionados">Adicionados</Nav>
              </S.Ul>
            )}
          </S.BoxInicio>
          <S.BoxFim>
            <S.Button onClick={this.handleModal}>Adicionar filme</S.Button>
            <Modal
              style={{
                overlay: {
                  background: "none"
                },
                content: {
                  backgroundColor: "#000000",
                  width: "130vh",
                  height: "80vh",
                  position: "absolute",
                  marginLeft: "30vh",
                  marginTop: "6vh"
                }
              }}
              isOpen={this.state.stateModal}
            >
              <S.BoxModal>
                <S.BoxDados>
                  <S.Dados>Editar dados</S.Dados>

                  <S.Label>Nome</S.Label>
                  <S.InputModal type="text" />

                  <S.Label>Descrição</S.Label>
                  <S.Textarea></S.Textarea>

                  <S.Status>Status</S.Status>
                  <S.BoxRadio>
                    <S.InputRadio type="radio" />
                    <S.Label>Já asssiti</S.Label>
                    <S.Radio type="radio" />
                    <S.Label>Ainda não assiti</S.Label>
                  </S.BoxRadio>
                  <h3>Notas</h3>
                  <ReactStars
                    isHalf={true}
                    count={5}
                    size={42}
                    activeColor="#6CBE61"
                  />
                </S.BoxDados>
                <S.BoxImg>
                  <S.ImgInput type="image" src={Montanha} />
                  <S.BotãoTrocar>Selecionar imagem</S.BotãoTrocar>
                </S.BoxImg>
              </S.BoxModal>
              <S.Boxbotão>
                <S.Cancelar>Cancelar</S.Cancelar>
                <S.Continuar onClick={this.closeModal}>Continuar</S.Continuar>
              </S.Boxbotão>
            </Modal>
            <Link to="/Todos">
              <S.Input type="text" placeholder=" Pesquisar" />
            </Link>
            <img src={Login} alt="Login" />
          </S.BoxFim>
        </S.Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Todos" element={<Todos />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="/Vistos" element={<Vistos />} />
          <Route path="/Adicionados" element={<Adicionados />} />
        </Routes>
      </Router>
    );
  }
}
