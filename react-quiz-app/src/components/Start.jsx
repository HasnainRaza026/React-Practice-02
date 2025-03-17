import { Quiz, Progress, Question, Options, Action } from "./Quiz";
import { Introduction, Heading, Body, Ending } from "./Introduction";
import { useFetchQuestions } from "../hooks/useFetchQuestions";
import { useQuiz } from "./QuizContext";

function Start() {
  const { status, dispatch } = useQuiz();

  useFetchQuestions(dispatch);

  return (
    <div>
      {status === "start" && (
        <Introduction>
          <Heading />
          <Body />
        </Introduction>
      )}
      {status === "active" && (
        <Quiz>
          <Progress />
          <Question />
          <Options />
          <Action />
        </Quiz>
      )}
      {status === "end" && (
        <Introduction>
          <Heading />
          <Ending />
        </Introduction>
      )}
    </div>
  );
}

export default Start;
