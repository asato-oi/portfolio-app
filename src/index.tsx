import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { ScrollToTop } from "./store/useScrollToTop";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
