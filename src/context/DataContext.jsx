import { createContext, useContext, useReducer } from "react";
import { validateData, validateMessage } from "../util/validateDatat";

const DataProvider = createContext();

const InitialState = {
  messages: validateMessage("messages"),
  time: JSON.parse(localStorage.getItem("time")),
  running: false,
  data: validateData("data"),
  login: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login/setdata": {
      localStorage.setItem("data", JSON.stringify(action.payload));
      return { ...state, data: action.payload };
    }
    case "login/sendMessage":
      return { ...state, login: true };
    case "login/deleteMessage":
      return { ...state, login: false };
    case "login/logout": {
      localStorage.setItem("data", "null");
      localStorage.setItem("messages", "[]");
      localStorage.setItem("time", "0");
      return { messages: [], time: 0, running: false, data: null };
    }
    case "chat/addmessage": {
      localStorage.setItem(
        "messages",
        JSON.stringify([...state.messages, action.payload])
      );
      return { ...state, messages: [...state.messages, action.payload] };
    }
    case "timer/updatetimer":
      localStorage.setItem("time", JSON.stringify(state.time));
      return { ...state, time: state.time + action.payload };
    case "timer/stoptimer":
      return { ...state, running: false };
    case "timer/starttimer":
      return { ...state, running: true };
    case "timer/resettimer":
      localStorage.setItem("time", JSON.stringify(0));
      return { ...state, time: 0, running: false };
    default:
      throw new Error("Please select an action");
  }
}

function DataContext({ children }) {
  const [{ messages, time, running, data, login }, dispatch] = useReducer(
    reducer,
    InitialState
  );
  return (
    <DataProvider.Provider
      value={{ messages, time, running, data, login, dispatch }}
    >
      {children}
    </DataProvider.Provider>
  );
}

function useData() {
  const context = useContext(DataProvider);
  if (context === undefined) throw new Error("failed to get the meaning data");

  return context;
}
export { DataContext, useData };
