import { useParams } from "react-router-dom";
import { dateFormat } from "../helpers/dateFormat";

function CityDetail({ cities }) {
  const { id } = useParams();
  const city = cities.find((item) => {
    return id === item.id;
  });

  const formattedDate = dateFormat(city.date);

  return (
    <div className="w-[252px] !px-[30px] !py-[20px] bg-[var(--bg-secondary-color)] rounded-lg flex flex-col gap-6">
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
          Check out Karachi on Wikipedia →
        </a>
      </div>
    </div>
  );
}

export default CityDetail;
