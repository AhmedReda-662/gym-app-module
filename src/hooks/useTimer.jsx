import { useEffect } from "react";
import { useData } from "../context/DataContext";

function useTimer() {
  const { time, running, dispatch } = useData();
  useEffect(() => {
    let intervel;
    if (running) {
      intervel = setInterval(() => {
        dispatch({ type: "timer/updatetimer", payload: 10 });
      }, 10);
    } else {
      clearInterval(intervel);
    }
    return () => clearInterval(intervel);
  }, [running, dispatch]);
  return time;
}

export default useTimer;
