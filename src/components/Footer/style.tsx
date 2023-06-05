import { styled } from "@/styles/stitches.config";
import { Container, Flex } from "@/styles/Global";

export const Footer = styled("footer", {
  backgroundColor: "rgb(13, 23, 33)",
  padding: "7rem 0",
  "& a": {
    margin: "0 !important",
  },
  "@tablet": {
    backgroundPosition: "center top 1rem",
  },
  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@mobile": {
      flexDirection: "column",
      [`& ${Flex}:first-child`]: {
        marginBottom: "$5",
        flexDirection: "column",
        textAlign: "center",
        [`& img`]: {
          marginBottom: "$2",
        },
      },
    },
  },
});

export const UserImage = styled("img", {
  borderRadius: "50%",
  height: "13rem",
  width: "13rem",
  "@mobile": {
    width: "17.25rem",
    height: "17.25rem",
  },
});
