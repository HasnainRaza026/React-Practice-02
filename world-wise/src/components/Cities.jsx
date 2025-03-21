import { Link } from "react-router-dom";
import { dateFormat } from "../helpers/dateFormat";
import { useCities } from "../contexts/CitiesContext";
import { deleteCity } from "../helpers/deleteCity";

function Cities() {
  const { cities, currentCity, setCities } = useCities();

  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteCity(id, cities, setCities);
  };

  return cities ? (
    <ul className="flex flex-col gap-4">
      {cities.map((city, i) => (
        <CitiesList
          key={i}
          city={city}
          currentCity={currentCity}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  ) : null;
}

function CitiesList({ city, currentCity, handleDelete }) {
  const formattedDate = dateFormat(city.date);

  return (
    <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}>
      <li
        className={`w-[344px] flex justify-between !px-[20px] rounded-lg bg-[var(--bg-secondary-color)]`}
        style={currentCity.id === city.id ? { border: "2px solid green" } : {}}
      >
        <div className="flex gap-2 items-center">
          <p className="text-[32px]">{city.emoji}</p>
          <p>{city.cityName}</p>
        </div>
        <div className="flex gap-3.5 items-center">
          <p>{formattedDate}</p>
          <button
            className="!px-[3px] !py-[3px] rounded-full bg-[#9E2323]"
            onClick={(e) => handleDelete(e, city.id)}
          >
            <img
              src="/src/assets/delete.png"
              alt="delete"
              className="w-3 h-3"
            />
          </button>
        </div>
      </li>
    </Link>
  );
}

export default Cities;
