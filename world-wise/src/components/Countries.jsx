function Countries({ cities }) {
  return (
    <div className="grid grid-cols-3 gap-7">
      {cities.map((city, i) => (
        <CountriesList key={i} city={city} />
      ))}
    </div>
  );
}

function CountriesList({ city }) {
  return (
    <div className="flex flex-col gap-1.5 items-center bg-[var(--bg-secondary-color)] rounded-lg !px-5 !py-2.5">
      <p className="text-[32px]">{city.emoji}</p>
      <p>{city.cityName}</p>
    </div>
  );
}

export default Countries;
