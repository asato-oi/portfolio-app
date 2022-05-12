import { animated, useSpring } from "@react-spring/web";
import { FC, memo } from "react";
import styled from "styled-components";

import { WorkList } from "../organism/WorkList";
import { WorkData } from "../../data/WorkData";
import {
  fontSize,
  fontWeight,
  lineHeight,
  media,
  space,
} from "../../styles/variables";
import { Inner } from "../../styles/Inner";
import { theme } from "../../styles/theme";

export const Home: FC = memo(() => {
  const styles = useSpring({
    from: {
      opacity: 0,
      scale: 0.9,
      transform: "translateY(20px)",
    },
    to: {
      opacity: 1,
      scale: 1,
      transform: "translateY(0)",
    },
  });
  return (
    <Container>
      <section style={{ backgroundColor: theme.bg1 }}>
        <Inner
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "100%",
          }}
        >
          <Name style={{ ...styles }}>ASATO OI</Name>
          <Bio style={{ marginTop: space.m * 1.5, ...styles }}>
            I am a junior front-end developer.
          </Bio>
        </Inner>
      </section>
      <div
        style={{
          minHeight: "100%",
          paddingBottom: space.xl,
          backgroundColor: theme.bg1,
        }}
      >
        <Inner>
          <section style={{ marginTop: space.xl }}>
            <WorkList works={WorkData} />
          </section>
        </Inner>
      </div>
    </Container>
  );
});

const Container = styled("div")((props) => ({
  backgroundColor: props.theme.bg1,
  transition: "background-color 200ms ease-in-out",
}));

const Name = styled(animated.h1)((props) => ({
  color: props.theme.theme,
  fontSize: fontSize.xxxxxl,
  fontWeight: fontWeight.bold,
  textAlign: "center",
  lineHeight: lineHeight.heading,
  [`@media ${media.sp}`]: {
    fontSize: 60,
  },
}));

const Bio = styled(animated.p)((props) => ({
  maxWidth: 700,
  color: props.theme.fg1,
  fontSize: fontSize.xxl,
  fontWeight: fontWeight.normal,
  textAlign: "center",
  lineHeight: 1.6,
}));
