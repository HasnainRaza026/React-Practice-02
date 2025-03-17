function InputField({ val, state, lable, type, textArea = false }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="email">{lable}</label>
      {textArea ? (
        <textarea
          value={val}
          onChange={(e) => state(e.target.value)}
          type={type}
          className="bg-white !px-4 !py-1.5 rounded-lg text-black outline-0"
        />
      ) : (
        <input
          value={val}
          onChange={(e) => state(e.target.value)}
          type={type}
          className="bg-white !px-4 !py-1.5 rounded-lg text-black outline-0"
        />
      )}
    </div>
  );
}

export default InputField;
