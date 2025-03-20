import { useEffect } from "react";
import { convertToEmoji } from "../helpers/convertToEmoji";

function useReverseGeocode(lat, lng, setCity, setCountry, setEmoji) {
  useEffect(() => {
    if (!lat && !lng) {
      return;
    }
    async function fetchCity() {
      try {
        const resp = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        if (!resp.ok)
          throw new Error("Something went wrong while fetching city");

        const data = await resp.json();
        const emoji = convertToEmoji(data.countryCode);
        setCity(data.city ? `${data.city} ${emoji}` : "");
        setCountry(data.country || "");
        setEmoji(emoji || "");
      } catch (err) {
        console.log(err);
      }
    }
    fetchCity();
  }, [lat, lng, setCity, setCountry, setEmoji]);
}

export default useReverseGeocode;
