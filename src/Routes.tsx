import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/Error/PageNotFound";
import Home from "./pages/Home";
import PrayTime from "./pages/PrayTimes";
import SingleSurah from "./pages/SingleSurah";
import Surahs from "./pages/Surahs";

const RoutesWrapper = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surahs" element={<Surahs />} />
        <Route path="/surahs/:surahId" element={<SingleSurah />} />
        <Route path="/times" element={<PrayTime />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default RoutesWrapper;
