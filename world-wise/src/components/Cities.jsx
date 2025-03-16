function Cities({cities}) {
  return cities ? (
    <ul className="flex flex-col gap-4">
      {cities.map((city, i) => (
        <CitiesList key={i} city={city} />
      ))}
    </ul>
  ) : null;
}

function CitiesList({ city }) {
  const dateString = city.date;
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <li className="w-[344px] flex justify-between !px-[20px] rounded-lg bg-[var(--bg-secondary-color)]">
      <div className="flex gap-2 items-center">
        <p className="text-[32px]">{city.emoji}</p>
        <p>{city.cityName}</p>
      </div>
      <div className="flex gap-3.5 items-center">
        <p>{formattedDate}</p>
        <button className="!px-[3px] !py-[3px] rounded-full bg-[#9E2323]">
          <img src="/src/assets/delete.png" alt="delete" className="w-3 h-3" />
        </button>
      </div>
    </li>
  );
}

export default Cities;
