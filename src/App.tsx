import { FC } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { Router } from "./router/Router";
import { DefaultLayout } from "./components/template/DefaultLayout";

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet
        // index.html と一致させる
        defaultTitle="Asato Oi"
        titleTemplate="%s - Asato Oi"
      />
      <GlobalStyles />
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </ThemeProvider>
  );
};
