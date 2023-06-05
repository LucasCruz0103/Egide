import { styled } from "@/styles/stitches.config";
import { Flex, Container } from "@/styles/Global";

export const Navbar = styled("nav", {
  background: "#1e3144",
  borderBottom: "2px solid $brand1",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  height:"6rem",
  zIndex: "99999",

  [`& ${Container}`]: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column",
    },
  },
});

export const LogoTipo = styled(Flex, {
  alignItems: "center",
});

export const LogoTipoText = styled("span", {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "$grey4",
  fontFamily: '"IBM Plex Sans"',
  "@mobile": {
    fontSize: "1rem",
    
  },
});

export const Imagem = styled ("img", {
  height: "4rem",
  width: "10rem",
  margin:"0 4px",
  background: "#1e3144",
});


export const NavbarLinks = styled(Flex, {
  "@mobile": {
    marginTop:"0.99rem",
    flexDirection: "column",
    alignItems: "center",
    background:"#1e3144",
    width:"100%",
    padding: "0 0",
    "& a": {
      width: "100%",
      justifyContent: "flex-start",
      alignItems:"center"
    },
  },
});

export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});
