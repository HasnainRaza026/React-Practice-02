export async function deleteCity(id, cities, setCities) {
  try {
    const resp = await fetch(`http://localhost:3000/cities/${id}`, {
      method: "DELETE",
    });
    if (!resp.ok) throw new Error("Something went wrong while deleting city");
    const newCities = cities.filter((city) => city.id !== id);
    setCities(newCities);
  } catch (err) {
    console.log(err);
  }
}
