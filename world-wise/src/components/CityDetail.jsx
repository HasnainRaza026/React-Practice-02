import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dateFormat } from "../helpers/dateFormat";
import { useCities } from "../contexts/CitiesContext";
import Button from "./Button";

function CityDetail() {
  const { cities, setCurrentCity } = useCities();
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the city based on ID
  const city = cities.find((item) => id === item.id);

  // ✅ Use useEffect to set the current city only when `id` changes
  useEffect(() => {
    if (city) setCurrentCity(city);
  }, [id, city, setCurrentCity]);

  // Format date safely (avoid errors if city is undefined)
  const formattedDate = city ? dateFormat(city.date) : "";

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  // Handle case when city is not found
  if (!city) {
    return <p className="text-red-500">City not found.</p>;
  }

  return (
    <div className="w-[344px] !px-[30px] !py-[20px] bg-[var(--bg-secondary-color)] rounded-lg flex flex-col gap-6">
      <div>
        <p className="text-[12px] font-semibold opacity-60">CITY NAME</p>
        <div className="flex gap-2 items-center">
          <p className="text-[32px] font-semibold">{city.emoji}</p>
          <p className="font-semibold">{city.cityName}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-[12px] font-semibold opacity-60">
          You went to {city.cityName} on
        </p>
        <p className="text-md opacity-60">{formattedDate}</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-[12px] font-semibold opacity-60">LEARN MORE</p>
        <a href="#" className="text-[12px] text-[#FFB545] underline">
          Check out {city.cityName} on Wikipedia →
        </a>
      </div>
      <Button
        text={"Back"}
        type={"button"}
        textColor="#ffffff"
        bgColor="rgba(0, 0, 0, .1)"
        bgHoverColor="rgba(0, 0, 0, .2)"
        border="border"
        onClick={handleBack}
      />
    </div>
  );
}

export default CityDetail;
