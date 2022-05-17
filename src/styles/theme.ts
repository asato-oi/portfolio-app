export interface Theme {
  isDark: boolean;
  fg1: string;
  fg2: string;
  fg3: string;
  fg4: string;
  bg1: string;
  bg2: string;
  bg3: string;
  border: string;
  theme: string;
}

export const theme: Theme = {
  isDark: true,
  fg1: "#dddddd",
  fg2: "#aaaaaa",
  fg3: "#888888",
  fg4: "#000000",
  bg1: "#363535",
  bg2: "#2a2a2a",
  bg3: "#dddddd",
  border: "#555555",
  theme: "#9EEC21",
};
