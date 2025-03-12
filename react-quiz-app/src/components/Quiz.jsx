import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { renderTime } from "./renderTime";

export function Quiz({ children }) {
  return <div className="w-[536px] flex flex-col gap-10">{children}</div>;
}

export function Progress({ answered, score }) {
  const progressWidth = (536 / 15) * (answered + 1);

  return (
    <div className="w-full flex flex-col gap-3">
      <div
        className="w-full h-[15px] rounded-full bg-[#C5CDD2] relative progress-bar"
        style={{ "--progress-width": `${progressWidth}px` }}
      ></div>
      <div className="flex justify-between">
        <p>Questions {answered + 1}/15</p>
        <p>Points {score}/280</p>
      </div>
    </div>
  );
}

export function Question({ question }) {
  return <p className="text-2xl font-bold">{question}</p>;
}

export function Options({
  options,
  points,
  optionSelectedBool,
  dispatch,
  correctOption,
  optionSelected,
}) {
  let isCorrect;
  if (optionSelectedBool) {
    isCorrect = correctOption === optionSelected ? "true" : "false";
  }

  return (
    <div className="w-full flex flex-col items-end gap-[18px]">
      {options.map((item, i) => (
        <Option
          item={item}
          points={points}
          dispatch={dispatch}
          key={i}
          optionIndex={i}
          optionSelectedBool={optionSelectedBool}
          correctIndex={correctOption}
          isCorrect={
            optionSelectedBool && i === correctOption
              ? "true"
              : i === optionSelected
              ? isCorrect
              : null
          }
        />
      ))}
    </div>
  );
}

function Option({
  item,
  points,
  dispatch,
  optionIndex,
  correctIndex,
  optionSelectedBool,
  isCorrect,
}) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: "optionSelectedBool",
          payLoad: {
            selectedIndex: optionIndex,
            correctIndex: correctIndex,
            points: points,
          },
        })
      }
      className={`flex font-bold !px-[30px] !py-[15px] ${
        isCorrect === "true"
          ? "bg-[#206024] w-[500px]"
          : isCorrect === "false"
          ? "bg-[#9A3131] w-[500px]"
          : "bg-[#3F474C] w-full"
      } rounded-full cursor-pointer gap-[18px] ${
        optionSelectedBool
          ? ""
          : "hover:w-[500px] transition-[width] delay-[200ms] ease"
      } `}
    >
      {item}
    </button>
  );
}

export function Action({ optionSelectedBool, dispatch }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timeChange" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="flex justify-between items-center">
      <CountdownCircleTimer
        key={key}
        size={90}
        strokeWidth={5}
        isPlaying
        duration={15}
        colors={["#2D7C36", "#8A942F", "#9A6F1F", "#802B2B"]}
        colorsTime={[15, 10, 5, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 0 })}
      >
        {renderTime}
      </CountdownCircleTimer>
      {optionSelectedBool ? (
        <button
          onClick={() => {
            dispatch({ type: "nextQuestion" });
            setKey((prevKey) => prevKey + 1);
          }}
          className="text-xl bg-[#3F474C] !px-[30px] !py-2.5 rounded-full hover:bg-[#2A2C2D] transition delay-150"
        >
          Next
        </button>
      ) : null}
    </div>
  );
}
