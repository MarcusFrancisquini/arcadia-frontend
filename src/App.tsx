import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const AppWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/games/")) {
      document.body.classList.add("blackout-body");
    } else {
      document.body.classList.remove("blackout-body");
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </>
  );
}

export default App;
