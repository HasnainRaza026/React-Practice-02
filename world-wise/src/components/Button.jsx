function Button({ text }) {
  return (
    <button className="text-black font-semibold !px-5 !py-2.5 bg-[#00C46A] rounded-lg cursor-pointer hover:bg-[#00FF8A] transition delay-200 ease-in-out">
      {text}
    </button>
  );
}

export default Button;
