function Button({
  text,
  type = "button",
  textColor = "text-black",
  bgColor = "#00C46A",
  bgHoverColor = "#00FF8A",
  border = "",
  otherCSS = "",
  onClick = () => {},
}) {
  return (
    <button
      type={type}
      className={`${border} ${textColor} font-semibold !px-5 !py-2.5 rounded-lg cursor-pointer transition delay-200 ease-in-out w-max ${otherCSS}`}
      style={{
        backgroundColor: bgColor,
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = bgHoverColor)}
      onMouseLeave={(e) => (e.target.style.backgroundColor = bgColor)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
