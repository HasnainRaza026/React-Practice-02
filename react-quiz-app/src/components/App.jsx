import "../index.css";
import Start from "./Start";
import { QuizProvider } from "./QuizContext";

function App() {
  return (
    <QuizProvider>
      <Start />
    </QuizProvider>
  );
}

export default App;
