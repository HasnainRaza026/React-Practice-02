import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [position, setPosition] = useState([51.505, -0.09]);
  const [city, setCity] = useState("");

  const { cities } = useCities();

  const navigate = useNavigate();

  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  useEffect(() => {
    if (lat && lng) {
      setPosition([lat, lng]);
    }
  }, [lat, lng, setSearchParam]);

  useEffect(() => {
    // Nominatim reverse geocoding API call
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        // The API returns an "address" object with various location fields.
        if (data.address) {
          // Check for different properties as the key might differ by location.
          console.log(data.address);

          const cityName =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "City not found";
          setCity(cityName);
        }
      })
      .catch((err) => console.error("Error fetching location data:", err));
  }, [lat, lng]);

  const changePosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          navigate(`form?lat=${latitude}&lng=${longitude}`);
        },
        (error) => {
          console.error("Error obtaining location:", error);
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleMapClick = (lat, lng) => {
    setPosition([lat, lng]);
    navigate(`form?lat=${lat}&lng=${lng}`);
  };

  return (
    <div id="map" className="relative w-[60%] h-full">
      <MapContainer center={position} zoom={5} style={{ height: "100vh" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span className="font-bold text-xl">{city.emoji}</span>
              <span className="font-bold text-xl"> {city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        {/* This component listens for clicks and passes the lat/lng to our handler */}
        <ClickHandler onMapClick={handleMapClick} />
        {/* This component triggers the flyTo animation when "position" changes */}
        <FlyToPosition position={position} />
      </MapContainer>
      <Button
        otherCSS="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 z-[1000]"
        text={"Update Location"}
        onClick={changePosition}
      />
    </div>
  );
}

function FlyToPosition({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom(), { animate: true });
    }
  }, [position, map]);

  return null;
}

function ClickHandler({ onMapClick }) {
  useMapEvent({
    click(e) {
      const { lat, lng } = e.latlng;
      onMapClick(lat, lng);
    },
  });
  return null; // This component doesn't render anything visible.
}

export default Map;
