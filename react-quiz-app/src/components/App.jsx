import { useReducer } from "react";
import "../index.css";
import { Introduction, Heading, Body } from "./Introduction";
import { reducer } from "../hooks/reducer";
import { Quiz, Progress, Question, Options, Action } from "./Quiz";

const initalState = { isPlaying: false };

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { isPlaying } = state;

  return (
    <>
      {!isPlaying ? (
        <Introduction>
          <Heading />
          <Body dispatch={dispatch} />
        </Introduction>
      ) : (
        <Quiz>
          <Progress />
          <Question />
          <Options />
          <Action />
        </Quiz>
      )}
    </>
  );
}

export default App;
