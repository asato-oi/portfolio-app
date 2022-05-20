import { FC, memo } from "react";

import { Helmet } from "react-helmet";

export const HeadData: FC = memo(() => {
  return (
    <Helmet>
      <title>ASATO OI Portfolio | Work</title>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="ASATO OI｜大井朝登のポートフォリオサイト"
      />
      <meta
        property="og:url"
        content="https://tiny-griffin-1b98ae.netlify.app/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ASATO OI Portfolio|Work" />
      <meta
        property="og:description"
        content="ASATO OI｜大井朝登のポートフォリオサイト"
      />
      <meta property="og:site_name" content="ASATO OI Portfolio" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="keywords" content="ASATO, OI, 大井, 朝登" />
    </Helmet>
  );
});
