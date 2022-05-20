import { FC, memo } from "react";
import { GitHub, Mail } from "react-feather";
import styled from "styled-components";

import { theme } from "../../styles/theme";
import { fontSize, fontWeight, media, space } from "../../styles/variables";

const Info = [
  {
    url: "https://github.com/AsatoOi",
    name: "GitHub",
    Icon: <GitHub size={20} strokeWidth={1} />,
  },
  {
    url: "mailto:21aw0108@jec.ac.jp",
    name: "Mail",
    Icon: <Mail size={20} strokeWidth={1} />,
  },
];
export const Sns: FC = memo(() => {
  return (
    <>
      {Info.map((i) => (
        <NavLink key={i.url}>
          <a
            href={i.url}
            target="_blank"
            title={i.name}
            style={{
              color: theme.fg1,
              textDecoration: "none",
              display: "inline-block",
              paddingTop: 10,
            }}
            rel="noreferrer"
          >
            {i.Icon}
          </a>
        </NavLink>
      ))}
    </>
  );
});

const NavLink = styled("li")({
  display: "block",
  paddingTop: space.m,
  paddingBottom: space.m,
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
