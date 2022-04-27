import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import ReactStars from "react-rating-stars-component";
import Coração from "./Img/Coração.png";
import Capitão from "./Img/Capitão.png";
import shrek from "./Img/shrek.png";
import Sozinho from "./Img/Sozinho.png";
import miaranha from "./Img/miaranha.png";
import Sonho from "./Img/Sonho.png";
import Volta from "./Img/Volta.png";
import Batman from "./Img/Batman.jpg";
import HP from "./Img/HP.jpg";
import Red from "./Img/Red.jpg";

const Div = styled.div`
  display: flex;
  flex-direction: column;
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
const BoxImg = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 18vh;
`;
const ImgCapitão = styled.img`
  width: 70vh;
  height: 40vh;
  margin-left: 8vh;
`;
const BoxDialogo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8vh;
`;
const Heart = styled.img`
  width: 3vh;
  height: 3vh;
  margin-bottom: 2vh;
  &:hover {
    cursor: pointer;
  }
`;
const Capitãoh6 = styled.h6`
  margin-bottom: 2vh;
`;
const Capitãoh2 = styled.h2`
  font-size: 5.8vh;
  margin-bottom: 2vh;
`;
const Capitãop = styled.p`
  width: 72vh;
  margin-bottom: 1vh;
`;
const H3 = styled.h3`
  margin-top: 6vh;
  margin-left: 8vh;
`;
const BoxCarousel = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 8vh;
`;
const Ul = styled.ul`
  margin: 2vh;
`;
const ImgCoração = styled.img`
  position: absolute;
  margin-top: 1vh;
  margin-left: 28vh;
`;
const ImgCarousel = styled.img`
  width: 32vh;
`;
const Title = styled.h3`
  font-size: 2.6vh;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const Paragrafo = styled.p`
  font-size: 2.3vh;
`;

export default class Inicio extends React.Component {
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
      }
    ]
  };

  render() {
    return (
      <Div>
        <Input type="text" placeholder=" Pesquisar" />
        <BoxImg>
          <ImgCapitão src={Capitão} alt="Filme Capitão fantastico" />
          <BoxDialogo>
            <Heart src={Coração} alt="" />
            <Capitãoh6>Visto recentemente</Capitãoh6>
            <Capitãoh2>Capitão Fantástico</Capitãoh2>
            <Capitãop>
              Nas florestas do estado de Washington, um pai cria seus seis
              filhos longe da civilização, em uma rígida rotina de aventuras.
              Ele é forçado a deixar o isolamento e leva sua família para
              encarar o mundo, desafiando sua ideia do que significa ser pai.
            </Capitãop>
            <ReactStars size={28} isHalf={true} />
          </BoxDialogo>
        </BoxImg>
        <H3>Destaques</H3>
        <BoxCarousel>
          <Carousel
            adaptiveHeight={true}
            wrapAround={true}
            slidesToShow={6}
            autoplay={true}
            autoplayInterval={1000}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              pagingDotsStyle: {
                fill: "none"
              }
            }}
          >
            {this.state.Filmes.map((item) => (
              <Ul>
                <ImgCoração src={item.rating} alt="" />
                <ImgCarousel src={item.Img} alt="Filmes em Cartaz" />
                <Title>
                  {item.Nome}
                  <ReactStars />
                </Title>
                <Paragrafo>{item.Sinopse}</Paragrafo>
              </Ul>
            ))}
          </Carousel>
        </BoxCarousel>
      </Div>
    );
  }
}
