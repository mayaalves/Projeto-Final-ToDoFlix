import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const BoxInicio = styled.div`
  margin-left: 3vh;
  width: 30%;
  display: flex;
  justify-content: space-evenly;
`;
export const Lu = styled.ul`
  font-size: 3vh;
  margin-top: 1vh;
`;
export const Ul = styled.ul`
  background-color: #000000;
  padding: 2vh;
  z-index: 9;
  display: flex;
  flex-direction: column;
  font-size: 3vh;
  position: absolute;
  margin-top: 2.5%;
  margin-left: 15.5%;
`;
export const Categoria = styled.button`
  border: none;
  background-color: #000000;
  font-size: 3vh;
`;
export const BoxFim = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
`;
export const Button = styled.button`
  padding: 1vh;
  height: 5vh;
  background-color: #e71b27;
  border-radius: 2px;
  border: none;
  cursor: pointer;
`;
export const Input = styled.input`
  background-color: #000000;
  border-radius: 2px;
  border: none;
  width: 70vh;
`;

//Estilo do Modal

export const BoxModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const BoxDados = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vh;
`;
export const Dados = styled.h3`
  margin-bottom: 4vh;
`;
export const Label = styled.label`
  margin-bottom: 2vh;
`;
export const InputModal = styled.input`
  background-color: #2c2c2c;
  margin-bottom: 2vh;
  border: none;
  height: 4vh;
`;
export const Textarea = styled.textarea`
  background-color: #2c2c2c;
  margin-bottom: 2vh;
  border: none;
  height: 10vh;
`;
export const Status = styled.h3`
  margin-bottom: 2vh;
`;
export const InputRadio = styled.input`
  all: unset;
  cursor: pointer;
  margin-left: -1vh;
  background-color: #000000;
  border: solid 2px #ffffff;
  border-radius: 10px;
  width: 2vh;
  height: 2vh;
`;
export const Radio = styled.input`
  all: unset;
  cursor: pointer;
  margin-left: 8vh;
  background-color: #000000;
  border: solid 2px #ffffff;
  border-radius: 10px;
  width: 2vh;
  height: 2vh;
`;
export const BoxRadio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const BoxImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vh;
`;
export const ImgInput = styled.input`
  margin-top: 12.5vh;
  margin-bottom: 2vh;
  height: 16vh;
  background-color: #000000;
  border: 2px solid #2c2c2c;
`;
export const BotãoTrocar = styled.button`
  color: #000000;
  width: 22vh;
  border-radius: 6px;
  padding: 1vh;
  cursor: pointer;
`;
export const Boxbotão = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 9vh;
`;
export const Cancelar = styled.button`
  padding: 1.5vh;
  background-color: #000000;
  border: none;
  cursor: pointer;
`;
export const Continuar = styled.button`
  padding: 1.5vh;
  background-color: #e71b27;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;
