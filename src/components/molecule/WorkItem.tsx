import { FC, memo, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";
import { Link } from "react-feather";
import * as variables from "../../styles/variables";

import { WorkType } from "../../data/WorkData";
import {
  borderRadius,
  fontSize,
  fontWeight,
  lineHeight,
  space,
} from "../../styles/variables";

interface Props {
  work: WorkType;
}

export const WorkItem: FC<Props> = memo(({ work }) => {
  const [hovered, setIsHovered] = useState<boolean>(false);
  const containerStyles = useSpring({
    transform: hovered ? "scale(0.96)" : "scale(1)",
    config: {
      tension: 500,
    },
  });
  const overlayStyles = useSpring({
    opacity: hovered ? 1 : 0,
    config: {
      tension: 500,
    },
  });
  const titleStyles = useSpring({
    opacity: hovered ? 1 : 0,
    transform: hovered ? "scale(1)" : "scale(1.2)",
    config: {
      tension: 500,
    },
  });
  const timeStyles = useSpring({
    opacity: hovered ? 0.8 : 0,
    transform: hovered ? "scale(1)" : "scale(1.2)",
    config: {
      tension: 500,
    },
  });
  return (
    <Container
      key={work.id}
      style={containerStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <WorkImage
        style={{
          backgroundImage: `url(${work.thumbnail})`,
        }}
      />
      <WorkOverlay style={overlayStyles}>
        <animated.h2
          style={{
            marginTop: space.s,
            marginRight: "auto",
            marginLeft: "auto",
            color: "black",
            fontSize: variables.fontSize.xxl,
            ...titleStyles,
          }}
        >
          {work.name}
        </animated.h2>
        <animated.time
          style={{
            marginTop: space.l,
            display: "block",
            color: "black",
            fontSize: fontSize.m,
            fontWeight: fontWeight.bold,
            lineHeight: lineHeight.just,
            ...timeStyles,
          }}
        >
          <p>
            For details, click here!
            <span style={{ paddingLeft: 6 }}>
              <Link size={15} strokeWidth={3} />
            </span>
          </p>
        </animated.time>
      </WorkOverlay>
    </Container>
  );
});

const Container = styled(animated.div)({
  position: "relative",
  borderRadius: borderRadius.m,
  cursor: "pointer",
  overflow: "hidden",
});

const WorkOverlay = styled(animated.div)((props) => ({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  paddingTop: space.m,
  paddingRight: space.m,
  paddingBottom: space.m,
  paddingLeft: space.m,
  pointerEvents: "none",
  backgroundColor: props.theme.theme + "dd",
}));

const WorkImage = styled(animated.div)({
  paddingBottom: "62.5%",
  backgroundSize: "cover",
  backgroundPosition: "center center",
});
