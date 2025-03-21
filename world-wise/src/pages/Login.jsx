import { useEffect, useState } from "react";
import Header from "../components/Header";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("hasnain@example.com");
  const [password, setPassword] = useState("hasnain@123321");
  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);

  const handleBack = (e) => {
    e.preventDefault();
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
            bgColor="rgba(0, 0, 0, .1)"
            bgHoverColor="rgba(0, 0, 0, .2)"
            border="border"
            onClick={handleBack}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
