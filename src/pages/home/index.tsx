// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Contacts } from "@/components/Contacts";

// Data

import Seguro from "../../assets/Seguro.png"
import Plano from "../../assets/Plano.png"
import Financiamento from "../../assets/Financiamento.png"
import Consorcio from "../../assets/Consorcio.png"
import CGI from "../../assets/CGI.png"

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  Imagem,
} from "./style";
import Carousel from 'react-bootstrap/Carousel';


export const Home = (): JSX.Element => {

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              O que faz uma corretora de seguros?
            </Text>
            <Text type="body1" color="grey2">
              De maneira simples, é o lugar que vende seguros. A corretora
              constitui-se como uma empresa que possui autorização legal para
              fazer a intermediação entre o cliente (segurado) e a companhia de
              seguros para a contratação de um serviço de seguro.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="outline" href="#projects">
                Ler mais
              </Button>
              <Button 
                as="a"
                css={{ "&:hover": { color: "black" } }}
                type="primary"
                href="#contact">
                Entre em contato com um corretor
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h1" type="heading5" color="grey4">
                Serviços
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <Carousel>
      <Carousel.Item>
        <Imagem
          src={Seguro}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Imagem
          src={Plano}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Imagem
          src={Financiamento}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Imagem
          src={Consorcio}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
