import { useReducer } from "react";
import "./index.css";

const initialState = { accOpen: false, balance: 0, loan: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "openAcc":
      return { ...state, accOpen: true, balance: 500 };
    case "closeAcc":
      return state.balance === 0 ? { ...state, accOpen: false } : { ...state };
    case "diposit":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return state.balance >= 50
        ? { ...state, balance: state.balance - 50 }
        : { ...state };
    case "reqLoan":
      return state.loan === 0
        ? { ...state, balance: state.balance + 5000, loan: 5000 }
        : { ...state };
    case "payLoan":
      return state.balance >= 5000
        ? { ...state, balance: state.balance - 5000, loan: 0 }
        : { ...state };
    default:
      throw new Error("something went wrong");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { accOpen, balance, loan } = state;
  return (
    <>
      <p className="font-bold text-5xl">Bank Account</p>
      <p className="text-xl">Balance: {balance}</p>
      <p className="text-xl">Loan: {loan}</p>
      <button
        disabled={accOpen}
        onClick={() => dispatch({ type: "openAcc" })}
        className="border-2 bg-gray-100 p-1.5 disabled:bg-gray-400"
      >
        Open Account
      </button>
      <button
        onClick={() => dispatch({ type: "diposit" })}
        disabled={!accOpen}
        className="border-2 bg-gray-100 p-1.5 disabled:bg-gray-400"
      >
        Deposit 150
      </button>
      <button
        onClick={() => dispatch({ type: "withdraw" })}
        disabled={!accOpen}
        className="border-2 bg-gray-100 p-1.5 disabled:bg-gray-400"
      >
        Withdraw 50
      </button>
      <button
        onClick={() => dispatch({ type: "reqLoan" })}
        disabled={!accOpen}
        className="border-2 bg-gray-100 p-1.5 disabled:bg-gray-400"
      >
        Request a loan of 5000
      </button>
      <button
        onClick={() => dispatch({ type: "payLoan" })}
        disabled={!accOpen}
        className="border-2 bg-gray-100 p-1.5 disabled:bg-gray-400"
      >
        Pay Loan
      </button>
      <button
        onClick={() => dispatch({ type: "closeAcc" })}
        disabled={!accOpen}
        className="border-2 bg-gray-100 p-1.5 disabled:bg-gray-400"
      >
        Close Account
      </button>
    </>
  );
}

export default App;
