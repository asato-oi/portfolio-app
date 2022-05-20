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
      <P2>多摩美術大学 美術学部 演劇舞踊デザイン学科　卒</P2>
      <P2>日本電子専門学校 Webデザイン科　在学</P2>
      <P1>
        高校時代に観た演劇「ハムレット」に衝撃を受け、大学で舞台芸術を学ぶことを決意する。多摩美術大学で演劇を学ぶ中で、演劇に留まらず、アート表現の本質は「人々の心を動かして世の中の人々を幸せにすることではないか」と思うようになる。4年間でディレクションや演出を中心に勉強し、卒業制作公演はディレクターを受け持つ。就職活動の一方、自らモノを作り世の中の人々を幸せにしたいという思いが捨てきれず、父の勧めもありプログラミングに興味をもつ。きちんと学びたいという思いから日本電子専門学校への進学をきめ、現在はフロントエンジニアとして人々を幸せにできるコンテンツを模索、制作を行っている。
      </P1>
      <br />
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div>
          <P2>好きなこと</P2>
          <ul style={{ marginTop: space.s, marginBottom: space.l }}>
            <li>プログラミングを勉強すること</li>
            <li>子供達と触れ合い、勉強を教えること</li>
            <li>愛犬のコムギと散歩をすること</li>
            <li>映画を見ること</li>
          </ul>
        </div>
        <div style={{ marginLeft: space.xl }}>
          <P2>これから挑戦すること</P2>
          <ul style={{ marginTop: space.s }}>
            <li>Vue</li>
            <li>NEXT.js</li>
            <li>Webpack</li>
            <li>Jest</li>
            <li>Storybook</li>
          </ul>
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
    fontSize: fontSize.s,
  },
}));
const P2 = styled("p")((props) => ({
  marginTop: space.s,
  color: props.theme.fg1,
  fontSize: fontSize.xl,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.body,
  [`@media ${media.sp}`]: {
    fontSize: fontSize.l,
  },
}));
