import { useReducer } from "react";
import "../index.css";
import { Introduction, Heading, Body, Ending } from "./Introduction";
import { reducer } from "../hooks/reducer";
import { Quiz, Progress, Question, Options, Action } from "./Quiz";
import { useFetchQuestions } from "../hooks/useFetchQuestions";

const initalState = {
  status: "start", //start --> active --> end
  quizData: [],
  answered: 0,
  optionSelectedBool: false,
  optionSelected: null,
  score: 0,
  secondsRemaining: 15,
};

function App() {
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

  useFetchQuestions(dispatch);

  return (
    <>
      {status === "start" && (
        <Introduction>
          <Heading />
          <Body dispatch={dispatch} />
        </Introduction>
      )}
      {status === "active" && (
        <Quiz>
          <Progress answered={answered} score={score} />
          <Question question={quizData[answered].question} />
          <Options
            options={quizData[answered].options}
            points={quizData[answered].points}
            dispatch={dispatch}
            optionSelectedBool={optionSelectedBool}
            correctOption={quizData[answered].correctOption}
            optionSelected={optionSelected}
          />
          <Action
            optionSelectedBool={optionSelectedBool}
            dispatch={dispatch}
            secondsRemaining={secondsRemaining}
          />
        </Quiz>
      )}
      {status === "end" && (
        <Introduction>
          <Heading />
          <Ending score={score} />
        </Introduction>
      )}
    </>
  );
}

export default App;
