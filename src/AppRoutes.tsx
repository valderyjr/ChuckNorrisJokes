import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchOne from "./pages/SearchOne";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchOne />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
