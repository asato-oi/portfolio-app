import { FC, memo } from "react";

import { Helmet } from "react-helmet";

export const HeadData: FC = memo(() => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>ASATO OI Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="ASATO OI｜大井朝登のポートフォリオサイト"
      />
      <meta
        property="og:url"
        content="https://asatooi-portfolio.netlify.app/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ASATO OI Portfolio|Work" />
      <meta
        property="og:description"
        content="大井朝登のポートフォリオサイト"
      />
      <meta property="og:site_name" content="ASATO OI Portfolio" />
      <meta property="og:locale" content="ja_JP" />
      <meta
        name="keywords"
        content="ASATO,OI,大井,朝登,おおい,あさと,オオイ,アサト,大井朝登,おおいあさと,AsatoOi,オオイアサト,大井 朝登,おおい あさと,オオイ アサト,Asato Oi,ASATO OI,ASATOOI"
      />
      <meta name="theme-color" content="#000000" />
    </Helmet>
  );
});
