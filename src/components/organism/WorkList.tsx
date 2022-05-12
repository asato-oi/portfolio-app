import { FC, memo } from "react";
import { animated, useTransition } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { WorkType } from "../../data/WorkData";
import * as variables from "../../styles/variables";

import { WorkItem } from "../molecule/WorkItem";

interface Props {
  works: WorkType[];
  style?: React.CSSProperties;
}

export const WorkList: FC<Props> = memo(({ works, style }) => {
  const navigate = useNavigate();
  const transition = useTransition(works, {
    keys: (item) => item.id,
    from: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    enter: {
      opacity: 1,
      transform: "translateY(0)",
    },
    trail: 100,
  });
  return (
    <Ul style={style}>
      {transition((styles, item) => (
        <Li style={styles} onClick={() => navigate(`/${item.id}`)}>
          <WorkItem work={item} />
        </Li>
      ))}
    </Ul>
  );
});

const Ul = styled("ul")({
  display: "grid",
  gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
  gridGap: variables.space.xl,
  width: "100%",
  listStyle: "none",
  padding: 0,
  [`@media ${variables.media.tablet}`]: {
    display: "flex",
    flexDirection: "column",
    gridGap: variables.space.xs,
  },
});

const Li = styled(animated.li)({
  gridColumn: "span 4",
  [`@media ${variables.media.tablet}`]: {
    marginBottom: variables.space.l,
  },
});
