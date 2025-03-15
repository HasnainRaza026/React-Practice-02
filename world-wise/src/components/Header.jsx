import Button from "./Button";

function Header() {
  return (
    <header className="flex justify-between w-[95%] fixed z-10 top-[30px] left-1/2 transform -translate-x-1/2">
      <img
        src="./src/assets/logo.png"
        alt="logo"
        className="w-[191px] h-[46px]"
      />
      <div className="flex gap-[60px] items-center">
        <p className="font-medium text-xl">PRICING</p>
        <p className="font-medium text-xl">PRODUCT</p>
        <Button text={"LOGIN"} />
      </div>
    </header>
  );
}

export default Header;
