import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Application from "./pages/Application";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import CityDetail from "./components/CityDetail";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  return (
    <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoutes>
                  <Application />
                </ProtectedRoutes>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<Cities />} />
              <Route path="cities/:id" element={<CityDetail />} />
              <Route path="countries" element={<Countries />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  );
}

export default App;
