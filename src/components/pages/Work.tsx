import { FC, useMemo, memo } from "react";
import { Link2, Code } from "react-feather";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Inner } from "../../styles/Inner";
import { WorkData, WorkType } from "../../data/WorkData";
import {
  borderRadius,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  media,
} from "../../styles/variables";

interface Props {}

export const Work: FC<Props> = memo(() => {
  const params = useParams<{ Part: string }>();
  console.log(params.Part);
  const CurrentWork: WorkType | undefined = useMemo(() => {
    return WorkData.find((it) => it.id === params.Part);
  }, [params.Part]);
  console.log(CurrentWork);

  if (CurrentWork === undefined) {
    return (
      <Container>
        <Inner style={{ maxWidth: 1200 }}>
          <h1>Sorry. Not Found.</h1>
        </Inner>
      </Container>
    );
  }
  return (
    <Container>
      <Helmet>
        <title>ASATO OI Portfolio | {CurrentWork.name}</title>
        <meta name="description" content={`${CurrentWork.name}の詳細ページ`} />
      </Helmet>
      <Inner
        style={{
          maxWidth: 1200,
        }}
      >
        <FlexPoint>
          <div>
            <Year>{CurrentWork.year}</Year>
            <Title>{CurrentWork.name}</Title>
            <Description
              dangerouslySetInnerHTML={{ __html: CurrentWork.description }}
            />
            <TagList>
              {CurrentWork.tags.map((tag: string, index: number) => (
                <TagItem key={index}>{tag}</TagItem>
              ))}
            </TagList>
          </div>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              listStyle: "none",
              paddingInlineStart: 0,
            }}
          >
            <li>
              <Button1 href={CurrentWork.url} target="_blank" rel="noopener">
                View Site
                <Link2
                  style={{ marginLeft: space.s }}
                  color={"black"}
                  size={16}
                />
              </Button1>
            </li>
            <li>
              <Button2 href={CurrentWork.code} target="_blank" rel="noopener">
                Source Code
                <Code
                  style={{ marginLeft: space.s }}
                  color={"black"}
                  size={16}
                />
              </Button2>
            </li>
          </ul>
        </FlexPoint>
        <div style={{ marginTop: space.xl }}>
          {CurrentWork.images.map((imagePath: string, i: number) => (
            <div key={imagePath} style={{ marginBottom: space.l }}>
              <img
                src={imagePath}
                alt={`${CurrentWork.name} ${i + 1}`}
                style={{
                  width: "75%",
                  borderRadius: borderRadius.m,
                  display: "block",
                  margin: "auto",
                }}
              />
            </div>
          ))}
        </div>
      </Inner>
    </Container>
  );
});

const Container = styled("div")({
  minHeight: "100%",
  paddingBottom: space.xl,
});

const Year = styled("time")((props) => ({
  display: "block",
  color: props.theme.fg2,
  fontSize: fontSize.m,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.just,
}));

const Title = styled("h1")((props) => ({
  marginTop: space.s,

  color: props.theme.fg1,
  fontSize: fontSize.xxxxl,
  lineHeight: lineHeight.heading,
  [`@media ${media.sp}`]: {
    fontSize: fontSize.xxl,
    maxWidth: 300,
  },
}));

const Description = styled("p")((props) => ({
  marginTop: space.s,
  marginRight: space.xl,
  color: props.theme.fg1,
  fontSize: fontSize.l,
  fontWeight: fontWeight.normal,
  [`@media ${media.sp}`]: {
    fontSize: fontSize.m,
  },
}));

const TagList = styled("ul")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  marginTop: space.m,
  paddingLeft: 0,
});

const TagItem = styled("li")((props) => ({
  marginRight: space.s,
  marginBottom: space.s,
  paddingRight: space.m,
  paddingLeft: space.m,
  listStyle: "none",
  color: props.theme.fg1,
  fontSize: fontSize.m,
  border: `1px solid ${props.theme.border}`,
  borderRadius: borderRadius.m,
  backgroundColor: props.theme.bg1,
}));

const FlexPoint = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  [`@media ${media.tablet}`]: {
    display: "block",
  },
});

const Button1 = styled("a")((props) => ({
  marginTop: space.m,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  paddingRight: space.m,
  paddingLeft: space.m,
  height: 40,
  minWidth: 180,
  color: "black",
  fontSize: fontSize.s,
  fontWeight: fontWeight.normal,
  textDecoration: "none",
  borderRadius: borderRadius.m,
  backgroundColor: props.theme.theme,
}));
const Button2 = styled("a")((props) => ({
  marginTop: space.m,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  paddingRight: space.m,
  paddingLeft: space.m,
  height: 40,
  minWidth: 180,
  color: "black",
  fontSize: fontSize.s,
  fontWeight: fontWeight.normal,
  textDecoration: "none",
  borderRadius: borderRadius.m,
  backgroundColor: props.theme.bg3,
}));
