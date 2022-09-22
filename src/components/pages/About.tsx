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
        maxWidth: 850,
        paddingTop: space.l,
        paddingBottom: space.xl,
      }}
    >
      <Helmet>
        <title>ASATO OI Portfolio | About</title>
        <meta name="description" content="Aboutページ" />
      </Helmet>
      <Heading>
        ASATO OI <span style={{ display: "inline-block" }}>｜ 大井 朝登</span>
      </Heading>
      <P1>Tama Art University Faculty of Art and Design</P1>
      <P1>Japan Electronics College Web Design Department</P1>
      <P1>University of London Computer Science (plan to enter)</P1>
      <div style={{ marginTop: space.xl, marginBottom: space.xl }}>
        <P1 style={{ position: "relative" }}>
          <P2>A word I like</P2>
          <blockquote>
            <p>
              &emsp;『All you need in this life is ignorance and confidence, and
              then success is sure.』
            </p>
          </blockquote>
          <p style={{ position: "absolute", right: 25 }}>
            {" "}
            &emsp;-- Mark Twain
          </p>
        </P1>
      </div>

      {/* 高校時代に観た演劇「ハムレット」に衝撃を受け、大学で舞台芸術を学ぶことを決意する。多摩美術大学で演劇を学ぶ中で、演劇に留まらず、アート表現の本質は「人々の心を動かして世の中の人々を幸せにすることではないか」と思うようになる。4年間でディレクションや演出を中心に勉強し、卒業制作公演はディレクターを受け持つ。就職活動の一方、自らモノを作り世の中の人々を幸せにしたいという思いが捨てきれず、父の勧めもありプログラミングに興味をもつ。きちんと学びたいという思いから日本電子専門学校への進学をきめ、現在はフロントエンジニアとして人々を幸せにできるコンテンツを模索、制作を行っている。 */}
      <br />
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div>
          <P2>Favorite things</P2>
          <Ul>
            <Li>programming instruction</Li>
            <Li>to teach my clam school children English and math</Li>
            <Li>Walking with my dog</Li>
            <Li>Watching movies</Li>
          </Ul>
        </div>
        <div style={{ marginLeft: space.xl }}>
          <P2>Next challenges</P2>
          <Ul>
            <Li>Vue</Li>
            <Li>Django</Li>
            <Li>Webpack</Li>
            <Li>Jest</Li>
            <Li>Storybook</Li>
          </Ul>
        </div>
      </div>
    </Inner>
  );
});

const Heading = styled("h2")({
  color: theme.theme,
  marginBottom: space.l,
  fontSize: fontSize.xxxxl,
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.heading,
});

const P1 = styled("p")((props) => ({
  letterSpacing: "0.1em",
  color: props.theme.fg1,
  fontSize: fontSize.m,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.body,
  [`@media ${media.sp}`]: {
    fontSize: fontSize.xs,
  },
}));
const P2 = styled("p")((props) => ({
  marginTop: space.s,
  color: theme.theme,
  fontSize: fontSize.xl,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.body,
  [`@media ${media.sp}`]: {
    fontSize: fontSize.s,
  },
}));
const Ul = styled("ul")((props) => ({
  marginBottom: space.l,
  fontSize: fontSize.l,
  paddingLeft: space.l,
  [`@media ${media.sp}`]: {
    fontSize: fontSize.s,
    paddingLeft: space.m,
  },
}));
const Li = styled("li")((props) => ({
  marginTop: space.s,
  fontSize: fontSize.m,
  [`@media ${media.sp}`]: {
    fontSize: fontSize.xs,
  },
}));
