import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchOne from "./pages/SearchOne";
import { AppProvider } from "./context/AppContext";
import MyFavorites from "./pages/MyFavorites";

const AppRoutes = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchOne />} />
          <Route path="me" element={<MyFavorites />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default AppRoutes;
