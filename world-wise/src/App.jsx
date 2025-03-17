import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Application from "./pages/Application";
import Cities from "./components/Cities";
import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import CityDetail from "./components/CityDetail";
import Form from "./components/Form";

function App() {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    async function fetchCities() {
      try {
        const resp = await fetch("http://localhost:3000/cities");
        if (!resp.ok)
          throw new Error("Something went wrong while fetching cities");
        const data = await resp.json();
        setCities(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<Application />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<Cities cities={cities} />} />
          <Route path="cities/:id" element={<CityDetail cities={cities} />} />
          <Route path="countries" element={<Countries cities={cities} />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
