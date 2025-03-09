import { useReducer } from "react";
import "../index.css";
import { Introduction, Heading, Body } from "./Introduction";
import { reducer } from "../hooks/reducer";

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
      ) : null}
    </>
  );
}

export default App;
