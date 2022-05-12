import { FC, memo } from "react";
import { animated, useSpring } from "@react-spring/web";

import styled from "styled-components";
import { fontSize, media, space } from "../../styles/variables";
import { theme } from "../../styles/theme";

const styles = {
  from: {
    opacity: 0,
    transform: "translateY(30px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
};

export const Footer: FC = memo(() => {
  const footerStyle = useSpring(styles);
  return (
    <animated.div style={footerStyle}>
      <Box>Copyright&copy; 2022 Asato Oi</Box>
    </animated.div>
  );
});

const Box = styled("div")({
  height: "20px",
  color: theme.fg1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: fontSize.m,
  [`@media ${media.sp}`]: {
    fontSize: fontSize.xs,
    paddingRight: space.s,
    paddingLeft: space.s,
  },
});
