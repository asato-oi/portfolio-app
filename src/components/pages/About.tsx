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
      <Helmet>
        <title>ASATO OI Portfolio | About</title>
        <meta name="description" content="Aboutページ" />
      </Helmet>
      <Heading>
        ASATO OI <span style={{ display: "inline-block" }}>｜ 大井 朝登</span>
      </Heading>
      <P2>Tama Art University </P2>
      <P2>Japan Electronics College Web Design Department</P2>
      <P2>University of London　Computer Science　</P2>
      <P1>
        高校時代に観た演劇「ハムレット」に衝撃を受け、大学で舞台芸術を学ぶことを決意する。多摩美術大学で演劇を学ぶ中で、演劇に留まらず、アート表現の本質は「人々の心を動かして世の中の人々を幸せにすることではないか」と思うようになる。4年間でディレクションや演出を中心に勉強し、卒業制作公演はディレクターを受け持つ。就職活動の一方、自らモノを作り世の中の人々を幸せにしたいという思いが捨てきれず、父の勧めもありプログラミングに興味をもつ。きちんと学びたいという思いから日本電子専門学校への進学をきめ、現在はフロントエンジニアとして人々を幸せにできるコンテンツを模索、制作を行っている。
      </P1>
      <br />
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div>
          <P2>好きなこと</P2>
          <Ul>
            <Li>プログラミングを勉強すること</Li>
            <Li>子供達と触れ合い、勉強を教えること</Li>
            <Li>愛犬のコムギと散歩をすること</Li>
            <Li>映画を見ること</Li>
          </Ul>
        </div>
        <div style={{ marginLeft: space.xl }}>
          <P2>次なる挑戦</P2>
          <Ul>
            <Li>Vue</Li>
            <Li>NEXT.js</Li>
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
  fontSize: fontSize.xxxxl,
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.heading,
});

const P1 = styled("p")((props) => ({
  letterSpacing: "0.1em",
  marginTop: space.l,
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
  color: props.theme.fg1,
  fontSize: fontSize.xl,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.body,
  [`@media ${media.sp}`]: {
    fontSize: fontSize.s,
  },
}));
const Ul = styled("ul")((props) => ({
  marginTop: space.s,
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
