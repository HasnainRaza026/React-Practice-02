export function reducer(state, action) {
  switch (action.type) {
    case "stateQuiz":
      return { ...state, isPlaying: true };
  }
}
