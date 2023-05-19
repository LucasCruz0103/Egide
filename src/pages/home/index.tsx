// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";
import Card from "react-bootstrap/Card";

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
                target="_blank"
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
              <Text as="h2" type="heading4" color="grey4">
                Meus Serviços
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <hr />
            <Card>
              <Card.Body >
                <Card.Title color="blue">Seguros</Card.Title>
                <Card.Text>
                O principal objetivo é o de prevenir que ocorram acidentes, orientando o segurado sobre as medidas de proteção a serem adotadas.
                </Card.Text>
              </Card.Body>
            </Card>
            <hr />
            <Card>
              <Card.Body>
                <Card.Title>Planos de Saúde</Card.Title>
                <Card.Text>
                viabiliza que o colaborador tenha uma assistência médica privada, com a disponibilidade de exames, consultas médicas e, até mesmo, internações.
                </Card.Text>
              </Card.Body>
            </Card>
            <hr />
            <Card>
              <Card.Body>
                <Card.Title>Financiamento de veículos</Card.Title>
                <Card.Text>
                tem o papel fundamental de esclarecer todas as informações como valores do seguro com relação ao perfil do condutor, coberturas e outros apontamentos.
                </Card.Text>
              </Card.Body>
            </Card>
            <hr />
            <Card>
              <Card.Body>
                <Card.Title>Consórcio</Card.Title>
                <Card.Text>
                são responsáveis por comercializar os consórcios aos clientes. Além disso atuam como elo de ligação entre o cliente e a administradora.
                </Card.Text>
              </Card.Body>
            </Card>
            <hr />
            <Card>
              <Card.Body>
                <Card.Title>CGI</Card.Title>
                <Card.Text>
                é uma modalidade de empréstimo mais barata, justamente pela garantia que o tomador dá.
                </Card.Text>
              </Card.Body>
            </Card>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
