import { FC, memo, useCallback } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Inner } from "../../styles/Inner";
import { Logo } from "../atom/Logo";
import { Sns } from "../atom/Sns";
import { fontSize, fontWeight, media, space } from "../../styles/variables";
import { theme } from "../../styles/theme";

export const height = 150;

const styles = {
  from: {
    opacity: 0,
    transform: "translateY(-30px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
};

export const Header: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => navigate("/"), [navigate]);
  const onClickAbout = useCallback(() => navigate("/about"), [navigate]);
  const headerStyles = useSpring(styles);

  return (
    <HeaderStyle>
      <animated.div style={headerStyles}>
        <Inner
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div onClick={onClickHome} style={{ height: 40 }}>
            <Logo size={40} color={theme.fg1} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <nav>
              <NavList>
                <NavLink onClick={onClickHome}>work</NavLink>
                <NavLink onClick={onClickAbout}>about</NavLink>
                <Sns />
              </NavList>
            </nav>
          </div>
        </Inner>
      </animated.div>
    </HeaderStyle>
  );
});

const HeaderStyle = styled("header")({
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  position: "fixed",
  zIndex: 2,
});

const NavList = styled("ul")({
  display: "flex",
  alignItems: "center",
  padding: 0,
  listStyle: "none",
});

const NavLink = styled("li")({
  display: "block",
  paddingTop: space.xs,
  paddingBottom: space.xs,
  paddingRight: space.m,
  paddingLeft: space.m,
  color: theme.fg1,
  fontSize: fontSize.l,
  fontWeight: fontWeight.thin,
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    opacity: 0.6,
  },
  [`@media ${media.sp}`]: {
    paddingRight: space.s,
    paddingLeft: space.s,
  },
});
