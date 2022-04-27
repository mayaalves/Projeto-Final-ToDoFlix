import React from "react";
import styled from "styled-components";

const Input = styled.input`
  position: absolute;
  font-size: 3vh;
  margin-top: 2.2vh;
  margin-left: 127vh;
  background-color: #2c2c2c;
  border-radius: 2px;
  border: none;
  width: 70vh;
  height: 5.5vh;
`;

export default class Favoritos extends React.Component {
  render() {
    return (
      <div>
        <Input type="text" placeholder=" Pesquisar" />
        <h1>Favoritos</h1>
      </div>
    );
  }
}
