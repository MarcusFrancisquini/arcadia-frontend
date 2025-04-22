import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import GameDetail from "../pages/GameDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="games/:id" element={<GameDetail />} />
    </Routes>
  );
};

export default AppRoutes;
