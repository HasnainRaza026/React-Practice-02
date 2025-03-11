import { useEffect } from "react";

export function useFetchQuestions(dispatch) {
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const resp = await fetch("http://localhost:3000/questions");
        if (!resp.ok)
          throw new Error("Something went wrong with fetching movies");
        const data = await resp.json();
        dispatch({ type: "addQuizData", payLoad: data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchQuestions();
  }, [dispatch]);
}
