import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button";

function Form() {
  const [city, setCity] = useState("Karachi");
  const [date, setDate] = useState("17/03/2025");
  const [note, setNote] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    navigate("/app");
  };

  const handleBack = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    navigate(-1);
  };

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
          type={"date"}
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
          bgColor="#000000"
          bgHoverColor="#000000"
          border="border"
          onClick={handleBack}
        />
      </div>
    </form>
  );
}

export default Form;
