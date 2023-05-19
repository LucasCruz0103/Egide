import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";

export const Contacts = () => {
  const ref = useRef(null);


  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <ContactSection id="contact">
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div style={{ scale }}>
            <ContactSectionText>
              <Text type="heading2" color="grey4">
                Vamos conersar e {" "}
                <Text as="span" type="heading2" color="brand1">
                  desenvolver soluções para você ou sua empresa
                </Text>
                , juntos!
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu Whatsapp
                </Text>
                <Text color="grey2" type="body2">
                Estou disponível para conersar, vamos falar sobre meus serviços
                  juntos?
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20site%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  Fale agora
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu email
                </Text>
                <Text color="grey2" type="body2">
                Envie-me um e-mail caso tenha interesse
                </Text>

                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`mailto=${userData.emailUser}`}
                  onClick={() =>
                    (window.location.href = "mailto:egideseguros@hotmail.com")
                  }
                >
                  Mande-me um email
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};