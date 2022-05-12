import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { About } from "../components/pages/About";
import { Work } from "../components/pages/Work";

export const Router: React.FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/:Part" element={<Work />} />
    </Routes>
  );
});
