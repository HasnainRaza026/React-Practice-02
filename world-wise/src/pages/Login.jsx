import { useState } from "react";
import Header from "../components/Header";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Login() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("user@123321");

  return (
    <div className="bg-[var(--bg-primary-color)] w-full h-full flex justify-center items-center">
      <Header />
      <form
        action=""
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
        <Button text={"Login"} />
      </form>
    </div>
  );
}

export default Login;
