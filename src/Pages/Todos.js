import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import Coração from "./Img/Coração.png";
import shrek from "./Img/shrek.png";
import Sozinho from "./Img/Sozinho.png";
import miaranha from "./Img/miaranha.png";
import Sonho from "./Img/Sonho.png";
import Volta from "./Img/Volta.png";
import Batman from "./Img/Batman.jpg";
import HP from "./Img/HP.jpg";
import Red from "./Img/Red.jpg";
import OrgPre from "./Img/OrgPre.jpg";
import Mother from "./Img/Mother.jpg";
import Magic from "./Img/Magic.jpg";
import Vingadores from "./Img/Vingadores.jpg";
import Tempo from "./Img/Tempo.jpg";
import Rocketman from "./Img/Rocketman.jpg";
import Runaways from "./Img/Runaways.jpeg";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
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
const Ul = styled.ul`
  margin-top: 14vh;
  margin-left: 8vh;
`;
const ImgCoração = styled.img`
  position: absolute;
  margin-top: 1vh;
  margin-left: 28vh;
  cursor: pointer;
`;
const Img = styled.img`
  width: 32vh;
  height: 18vh;
`;
const Title = styled.h3`
  width: 32vh;
  font-size: 2.6vh;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const Details = styled.details`
  cursor: pointer;
`;
const Paragrafo = styled.p`
  width: 32vh;
  font-size: 2.3vh;
`;

export default class Todos extends React.Component {
  state = {
    Filmes: [
      {
        rating: Coração,
        Img: shrek,
        Nome: "Shrek",
        Sinopse:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão."
      },
      {
        rating: Coração,
        Img: Sozinho,
        Nome: "Hoje eu quero voltar sozinho",
        Sinopse:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga."
      },
      {
        rating: Coração,
        Img: miaranha,
        Nome: "Spider-man",
        Sinopse:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo."
      },
      {
        rating: Coração,
        Img: Sonho,
        Nome: "Sonho de liberdade",
        Sinopse:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão."
      },
      {
        rating: Coração,
        Img: Volta,
        Nome: "Que horas ela volta?",
        Sinopse:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel."
      },
      {
        rating: Coração,
        Img: Batman,
        Nome: "The Batman",
        Sinopse:
          "Bruce Wayne se encontra nas profundezas de Gotham City. Com poucos aliados confiáveis, se estabelece como a personificação da vingança para a população."
      },
      {
        rating: Coração,
        Img: HP,
        Nome: "Harry Potter e a Pedra Filosofal",
        Sinopse:
          "Harry Potter é um garoto órfão que vive infeliz com seus tios. Ele recebe uma carta contendo um convite para ingressar em uma famosa escola para bruxos."
      },
      {
        rating: Coração,
        Img: Red,
        Nome: "Red: Crescer é uma Fera",
        Sinopse:
          "Uma menina de 13 anos começa a se transformar em um panda vermelho gigante sempre que fica animada."
      },
      {
        rating: Coração,
        Img: OrgPre,
        Nome: "Orgulho e Preconceito",
        Sinopse:
          "Elizabeth Bennet vive com sua família e enfrenta uma crescente pressão para se casar. Quando ela é apresentada ao Sr.Darcy, faíscas voam porém a natureza excessivamente reservada dele ameaçam a relação."
      },
      {
        rating: Coração,
        Img: Mother,
        Nome: "Mãe!",
        Sinopse:
          "Uma mulher pensa que terá um final de semana tranquilo com o marido em casa. Porém, começam a chegar diversos convidados na residência dos dois. Isso faz com que o casamento deles seja testado das mais variadas maneiras."
      },
      {
        rating: Coração,
        Img: Magic,
        Nome: "Da Magia à Sedução",
        Sinopse:
          "Sally e Gillian Owens, nascidas em uma família de mágicos, têm evitado a bruxaria, mas, quando o namorado de Gillian morre inesperadamente, as irmãs decidem fazer uma reciclagem em magia. O policial Gary Hallet está começando a suspeitar enquanto as garotas lutam para ressuscitar Angelov e acabam injetando em seu cadáver um espírito do mal que ameaça toda a linhagem familiar."
      },
      {
        rating: Coração,
        Img: Vingadores,
        Nome: "Vingadores: Ultimato",
        Sinopse:
          "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco."
      },
      {
        rating: Coração,
        Img: Tempo,
        Nome: "Questão de Tempo",
        Sinopse:
          "Depois de descobrir que ele pode viajar no tempo, o jovem Tim Lake usa sua habilidade para ganhar o coração da mulher dos seus sonhos e salvar seu amigo de um desastre profissional."
      },
      {
        rating: Coração,
        Img: Rocketman,
        Nome: "Rocketman",
        Sinopse:
          "Extremamente talentoso mas muito tímido, o pianista prodígio Reginald Dwight muda seu nome para Elton John e torna-se uma estrela da música de renome internacional durante os anos 1970."
      },
      {
        rating: Coração,
        Img: Runaways,
        Nome: "The Runaways - Garotas do Rock",
        Sinopse:
          "Joan Jett e Cherie Currie, duas adolescentes rebeldes do sul da Califórnia, são as líderes das Runaways, a lendária banda que abriu o caminho para futuras gerações de mulheres roqueiras. Sob a influência do empresário Kim Fowley, a banda faz um grande sucesso. Porém, a relação tempestuosa entre as adolescentes ameaça o futuro do grupo."
      }
    ],
    FilmesFiltrados: []
  };

  componentDidMount() {
    this.setState({ FilmesFiltrados: this.state.Filmes });
  }

  Filtro = (event) => {
    const { Filmes } = this.state;
    const FilmesFiltrados = Filmes.filter((item) => {
      if (item.Nome.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    });

    this.setState({
      Filmes: FilmesFiltrados,
      FilmesFiltrados: Filmes
    });
  };

  render() {
    return (
      <Div>
        <Input onChange={this.Filtro} type="text" placeholder=" Pesquisar" />
        {this.state.Filmes.map((item) => (
          <Ul>
            <ImgCoração src={item.rating} alt="" />
            <Img src={item.Img} alt="Filmes em Cartaz" />
            <Title>{item.Nome}</Title>
            <ReactStars />
            <Details>
              <summary>Sinopse</summary>
              <Paragrafo>{item.Sinopse}</Paragrafo>
            </Details>
          </Ul>
        ))}
      </Div>
    );
  }
}
