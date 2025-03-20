import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useCities } from "../contexts/CitiesContext";
import { useUrlPosition } from "../hooks/useUrlPosition";

function Map() {
  const [lat, lng] = useUrlPosition();
  const [position, setPosition] = useState([51.505, -0.09]);

  const { cities } = useCities();

  const navigate = useNavigate();

  useEffect(() => {
    if (lat && lng) {
      setPosition([lat, lng]);
    }
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
      <MapContainer center={position} zoom={6} style={{ height: "100vh" }}>
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
