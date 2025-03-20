export async function addCity(newCity, cities, setCities) {
  try {
    const resp = await fetch("http://localhost:3000/cities", {
      method: "POST",
      body: JSON.stringify(newCity),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!resp.ok) throw new Error("Something went wrong while adding city");
    const data = await resp.json();
    setCities([...cities, data]);
  } catch (err) {
    console.log(err);
  }
}
