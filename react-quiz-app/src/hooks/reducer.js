export function reducer(state, action) {
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
