import { createContext, useContext, useState } from "react";
import useFetchCities from "../hooks/useFetchCities";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState({});
  useFetchCities(setCities);

  return (
    <CitiesContext.Provider
      value={{ cities, setCities, currentCity, setCurrentCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Context is used outside of its scope");

  return context;
}

export { CitiesProvider, useCities };
