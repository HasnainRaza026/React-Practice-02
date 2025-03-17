function Button({
  text,
  type = null,
  textColor = "text-black",
  bgColor = "#00C46A",
  bgHoverColor = "#00FF8A",
  border = "",
  onClick = () => {},
}) {
  return (
    <button
      type={type}
      className={`${border} ${textColor} font-semibold !px-5 !py-2.5 bg-[${bgColor}] rounded-lg cursor-pointer hover:bg-[${bgHoverColor}] transition delay-200 ease-in-out w-max`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
