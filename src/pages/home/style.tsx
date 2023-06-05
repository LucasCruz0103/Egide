import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

import corretora from "@/public/static/img/background/corretora.svg";

export const Header = styled("header", {
  backgroundColor: "#1e3144",
  padding: "10rem 0 8rem 0",
  backgroundImage: `url(${corretora})`,
  backgroundSize:"32%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundAttachment: "fixed",
  "@mobile": {
    padding: "9rem 0 6rem 0",
    backgroundImage: `none`,
  },
  "@mobileLittle": {
    padding: "9rem 0 0 0",
  },
});

export const HeaderContent = styled("div", {
  maxWidth: "100%",
  width: "36rem",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  "@tablet": {
    width: "36rem",
  },
  "@mobile": {
    width: "100%",
  },
});

export const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",

  [`& ${Button}`]: {
    marginRight: "$2",
    overflow: "hidden",
  },

  "@mobile": {
    [`& ${Button}`]: {
      marginRight: "$2",
      overflow: "hidden",
      width: "100%",
    },

    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gridGap: "$2",
    marginBottom: "$2",
  },
});


export const StackSection = styled("div", {
  backgroundColor: "$grey4",
  padding: "4rem 0 2rem 0",
});


export const ProjectsArea = styled("section", {
  padding: "1rem",
  backgroundColor: " rgb(30, 49, 60)",
  "@tablet": {
    padding: "$sectionMobile 0",
  },
});


export const ProjectsAreaSocialMediaMessage = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  marginTop:"3rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
  },
});


export const Imagem = styled("img",{
  width: "63%",
  height: "19rem",
  display: "block",
  margin: "0px auto",
  "@tablet":{
    width: "68%",
  },
  "@mobileLittle":{
    width:"100%",
    height:"14rem"
  }
 
})

