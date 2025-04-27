import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import GameDetail from "../pages/GameDetail";
import Search from "../pages/Search";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="games/:id" element={<GameDetail />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default AppRoutes;
