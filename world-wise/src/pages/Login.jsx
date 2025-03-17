import { useState } from "react";
import Header from "../components/Header";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("user@123321");

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
    <div className="bg-[var(--bg-primary-color)] w-full h-full flex justify-center items-center">
      <Header />
      <form
        onSubmit={handleSubmit}
        className="bg-[var(--bg-secondary-color)] w-[450px] !px-[30px] !py-[30px] rounded-xl flex flex-col gap-[50px]"
      >
        <div className="flex flex-col gap-5">
          <InputField
            val={email}
            state={setEmail}
            lable={"Email address"}
            type={"email"}
          />
          <InputField
            val={password}
            state={setPassword}
            lable={"Password"}
            type={"password"}
          />
        </div>
        <div className="flex justify-between">
          <Button text={"Login"} type={"submit"} />
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
    </div>
  );
}

export default Login;
