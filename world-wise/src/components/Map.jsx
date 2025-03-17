import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div className="w-[60%] h-full" onClick={() => navigate("form")}>
      <p className="text-black">{lat}</p>
      <p className="text-black">{lng}</p>
    </div>
  );
}

export default Map;
