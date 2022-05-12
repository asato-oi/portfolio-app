import { FC, memo, ReactNode } from "react";

import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "15vh", minHeight: "97vh" }}>{children}</div>
      <Footer />
    </>
  );
});
