export function Quiz({ children }) {
  return <div className="w-[536px] flex flex-col gap-10">{children}</div>;
}

export function Progress() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full h-[15px] rounded-full bg-[#C5CDD2]"></div>
      <div className="flex justify-between">
        <p>Questions 1/15</p>
        <p>Points 0/280</p>
      </div>
    </div>
  );
}

export function Question() {
  return (
    <p className="text-2xl font-bold">
      Which is the most popular JavaScript framework?
    </p>
  );
}

export function Options() {
  return (
    <div className="w-full flex flex-col items-end gap-[18px]">
      <button className="w-full flex font-bold !px-[30px] !py-[15px] bg-[#3F474C] rounded-full cursor-pointer gap-[18px] hover:w-[500px] transition-[width] delay-[200ms] ease">
        Angular
      </button>
      <button className="w-full flex font-bold !px-[30px] !py-[15px] bg-[#3F474C] rounded-full cursor-pointer gap-[18px] hover:w-[500px] transition-[width] delay-[200ms] ease">
        React
      </button>
      <button className="w-full flex font-bold !px-[30px] !py-[15px] bg-[#3F474C] rounded-full cursor-pointer gap-[18px] hover:w-[500px] transition-[width] delay-[200ms] ease">
        Svelte
      </button>
      <button className="w-full flex font-bold !px-[30px] !py-[15px] bg-[#3F474C] rounded-full cursor-pointer gap-[18px] hover:w-[500px] transition-[width] delay-[200ms] ease">
        Vue
      </button>
    </div>
  );
}

export function Action() {
  return (
    <div className="flex justify-between">
      <div className="w-[90px] h-[90px] text-2xl font-light flex justify-center items-center rounded-full border-[5px]">
        15
      </div>
      <button className="text-xl bg-[#3F474C] !px-[30px] !py-2.5 rounded-full hover:bg-[#2A2C2D] transition delay-150">
        Next
      </button>
    </div>
  );
}
