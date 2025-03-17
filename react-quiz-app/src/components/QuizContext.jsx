import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const initalState = {
  status: "start", //start --> active --> end
  quizData: [],
  answered: 0,
  optionSelectedBool: false,
  optionSelected: null,
  score: 0,
  secondsRemaining: 15,
};

function reducer(state, action) {
  switch (action.type) {
    case "stateQuiz":
      return { ...state, status: "active" };
    case "addQuizData":
      return { ...state, quizData: action.payLoad };
    case "optionSelectedBool":
      return !state.optionSelectedBool
        ? {
            ...state,
            optionSelectedBool: true,
            optionSelected: action.payLoad.selectedIndex,
            score:
              action.payLoad.selectedIndex === action.payLoad.correctIndex
                ? state.score + action.payLoad.points
                : state.score,
          }
        : { ...state };

    case "nextQuestion":
      return state.answered === 14
        ? { ...state, status: "end" }
        : {
            ...state,
            answered: state.answered + 1,
            secondsRemaining: 15,
            optionSelectedBool: false,
          };
    case "timeChange":
      return state.secondsRemaining === 0
        ? {
            ...state,
            secondsRemaining: 15,
            answered: state.answered + 1,
            status: state.answered + 1 === 14 ? "end" : "active",
          }
        : { ...state, secondsRemaining: state.secondsRemaining-- };
  }
}

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [
    {
      status,
      quizData,
      answered,
      optionSelectedBool,
      optionSelected,
      score,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initalState);

  return (
    <QuizContext.Provider
      value={{
        status,
        quizData,
        answered,
        optionSelectedBool,
        optionSelected,
        score,
        secondsRemaining,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Context is used outside of its scope");

  return context;
}

export { QuizProvider, useQuiz };
