import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper,UserImage } from "./style";
import { userData } from "@/utils/userData";
import { FaInstagram } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
import icon from "../../assets/icon.png"

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id="social-media">
      <Container>
        <Flex>
          <UserImage
            src={icon}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"70px"}
            height={"70px"}
          />
          <Box css={{ marginLeft: "$2" }}>
            <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
              Obrigado! 
            </Text>
            <Text type="body1" color="grey2">
              Nos siga nas redes sociais para acompanhar nossos produtos e novidades!
            </Text>
          </Box>
        </Flex>
        <Flex
          css={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "$2",
          }}
        >
          <Button
            className="instagram"
            type="circle"
            as="a"
            target="_blank"
            href={`https://instagram.com/${userData.instagramUser}`}
          >
            <FaInstagram />
          </Button>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
