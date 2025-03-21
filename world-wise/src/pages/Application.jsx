import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Map from "../components/Map";
import { useAuth } from "../contexts/AuthContext";

function Application() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-full h-full flex">
      <div className="fixed top-5 right-5 z-9999 flex gap-3 items-center rounded-lg bg-[var(--bg-primary-color)] !px-3 !py-2">
        <img
          className="w-10 h-10 rounded-full"
          src={user.image}
          alt="picture"
        />
        <p className="">Welcome, {user.name}</p>
        <button className="text-red-400 cursor-pointer" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="w-[40%] h-full bg-[var(--bg-primary-color)] flex justify-center items-center">
        <div className="flex flex-col gap-[60px] items-center justify-center">
          <img
            src="./src/assets/logo.png"
            alt="logo"
            className="w-[231px] h-[55px]"
          />
          <div className="flex flex-col gap-11 items-center">
            <div className="bg-[var(--bg-secondary-color)] rounded-lg w-[183px] h-[38px] flex justify-center items-center">
              <NavLink
                to="cities"
                className={({ isActive }) =>
                  `!px-5 !py-2.5 rounded-lg font-semibold text-[12px] ${
                    isActive ? "tabActive" : ""
                  }`
                }
              >
                CITIES
              </NavLink>
              <NavLink
                to="countries"
                className={({ isActive }) =>
                  `!px-5 !py-2.5 rounded-lg font-semibold text-[12px] ${
                    isActive ? "tabActive" : ""
                  }`
                }
              >
                COUNTRIES
              </NavLink>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
}

export default Application;
