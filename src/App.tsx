import { FC } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { Router } from "./router/Router";
import { DefaultLayout } from "./components/template/DefaultLayout";

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </ThemeProvider>
  );
};
