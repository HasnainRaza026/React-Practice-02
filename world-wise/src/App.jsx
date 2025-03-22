import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";

import Cities from "./components/Cities";
import Countries from "./components/Countries";
import CityDetail from "./components/CityDetail";
import Form from "./components/Form";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Spinner from "./components/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));
const Application = lazy(() => import("./pages/Application"));

function App() {
  return (
    <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  );
}

export default App;
