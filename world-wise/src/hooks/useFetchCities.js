import { useEffect } from "react";

function useFetchCities(setCities) {
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
  }, [setCities]);
}

export default useFetchCities;
