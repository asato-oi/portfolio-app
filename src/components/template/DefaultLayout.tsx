import { FC, memo, ReactNode } from "react";

import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { HeadData } from "../../data/HeadData";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      <HeadData />
      <div style={{ paddingTop: "15vh", minHeight: "97vh" }}>{children}</div>
      <Footer />
    </>
  );
});
