import { FC, memo } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { Inner } from "../../styles/Inner";
import {
  fontSize,
  fontWeight,
  lineHeight,
  media,
  space,
} from "../../styles/variables";
import { theme } from "../../styles/theme";

export const About: FC = memo(() => {
  return (
    <Inner
      style={{
        maxWidth: 900,
        paddingTop: space.l,
        paddingBottom: space.xl,
      }}
    >
      <Helmet title="About" />
      <Heading>ASATO OI</Heading>
      <P>Hi! I'm a junior front-end developer.</P>
      <br />
      <P>When I'm not in development:</P>
      <ul style={{ marginTop: space.l }}>
        <li>Teaching English&mathematics to students at a cram school.</li>
        <li>Playing with my dog 'Komugi'.</li>
        <li>Reading books & Watching movies.</li>
      </ul>
    </Inner>
  );
});

const Heading = styled("h2")({
  color: theme.theme,
  fontSize: fontSize.xxxxl,
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.heading,
});

const P = styled("p")((props) => ({
  marginTop: space.l,
  color: props.theme.fg1,
  fontSize: fontSize.l,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.body,
  [`@media ${media.sp}`]: {
    fontSize: fontSize.xl,
  },
}));
