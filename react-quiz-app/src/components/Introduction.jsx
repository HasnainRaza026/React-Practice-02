import { useQuiz } from "./QuizContext";

export function Introduction({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px]">
      {children}
    </div>
  );
}

export function Heading() {
  return (
    <div className="flex items-center gap-[50px]">
      <img
        src="./src/assets/react.svg"
        alt="react-logo"
        className="w-[130px] h-[118px]"
      />
      <p className="text-[4rem] font-[Codystar]">REACT QUIZ APP</p>
    </div>
  );
}

export function Body() {
  const { dispatch } = useQuiz();

  return (
    <div className="flex flex-col items-center gap-[50px]">
      <div className="flex flex-col items-center gap-5">
        <p className="font-bold text-[2.5rem]">Welcome to the React Quiz!</p>
        <p className="font-bold text-2xl">
          15 questions to test your React mastery
        </p>
      </div>
      <button
        onClick={() => dispatch({ type: "stateQuiz" })}
        className="text-xl bg-[#3F474C] hover:bg-[#2a2c2d] transition delay-150 ease-in-out rounded-full !px-[30px] !py-[15px]"
      >
        Let's Start
      </button>
    </div>
  );
}

export function Ending() {
  const { score } = useQuiz();
  return (
    <p className="font-bold text-[2.5rem]">You scored {score} out of 280</p>
  );
}
