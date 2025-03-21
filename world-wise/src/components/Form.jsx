import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import useReverseGeocode from "../hooks/useReverseGeocode";
import { addCity } from "../helpers/addCity";
import { useCities } from "../contexts/CitiesContext";

function Form() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");
  const [date, setDate] = useState(() => {
    const dateObj = new Date();
    const formattedDate = `${(dateObj.getMonth() + 1) // Format to MM/DD/YYYY
      .toString()
      .padStart(2, "0")}/${dateObj
      .getDate()
      .toString()
      .padStart(2, "0")}/${dateObj.getFullYear()}`;
    return formattedDate;
  });

  const [note, setNote] = useState("");
  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();

  useReverseGeocode(lat, lng, setCity, setCountry, setEmoji);

  const { cities, setCities } = useCities();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!city || !date) return;

    const newCity = {
      cityName: city.split(" ")[0], // fix: reloading
      country,
      emoji,
      date,
      notes: note,
      position: { lat, lng },
    };

    console.log(newCity);
    await addCity(newCity, cities, setCities);
    navigate("/app/cities");
  }

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  if (city === "") {
    return (
      <p className="text-xl font-bold">
        City does not exit here, try clicking on the land!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--bg-secondary-color)] w-[450px] !px-[30px] !py-[30px] rounded-xl flex flex-col gap-[50px]"
    >
      <div className="flex flex-col gap-5">
        <InputField
          val={city}
          state={setCity}
          lable={"City name"}
          type={"text"}
        />
        <InputField
          val={date}
          state={setDate}
          lable={"When did you go to Helechosa de los Montes?"}
          type={"text"}
        />
        <InputField
          val={note}
          state={setNote}
          lable={"Notes about your trip to Jarilla"}
          type={"text"}
          textArea={true}
        />
      </div>
      <div className="flex justify-between">
        <Button text={"ADD"} type={"submit"} />
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
    </form>
  );
}

export default Form;
