import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import Landing from "../screens/Landing/Landing";
import BussinessCollab from "../screens/BusinessCollab/BussinessCollab";
import Premium from "../screens/Premium/Premium";
import VIP from "../screens/VIP/VIP";
import LoveJournal from "../screens/LoveJournal/LoveJournal";
import LoveJournalBlog from "../screens/LoveJournalBlog/LoveJournalBlog";

function NavigatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Landing />} />
        <Route path="/business" element={<BussinessCollab />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/vip" element={<VIP />} />
        <Route path="/loveJournal" element={<LoveJournal />} />
        <Route path="/loveJournal/:id" element={<LoveJournalBlog />} />
      </Route>
    </Routes>
  );
}

export default NavigatedRoutes;
