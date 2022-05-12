import styled from "styled-components";

import * as variable from "./variables";

export const Inner = styled("div")({
  marginRight: "auto",
  marginLeft: "auto",
  paddingRight: variable.space.xl,
  paddingLeft: variable.space.xl,
  width: "100%",
  maxWidth: 1400,
  minHeight: "100%",
  [`@media ${variable.media.sp}`]: {
    paddingRight: variable.space.l,
    paddingLeft: variable.space.l,
  },
});
