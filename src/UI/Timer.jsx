import { useEffect } from "react";
import { useData } from "../context/DataContext";

function Timer() {
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
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl px-4 py-2 border border-gray-600/30">
      <div className="text-center">
        <div className="text-2xl font-mono font-bold text-green-400">
          <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}</span>:
          <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}</span>
          <span className="hidden">
            {("0" + (Math.floor(time / 10) % 100)).slice(-2)}
          </span>
        </div>
        <div className="text-xs text-gray-300 uppercase tracking-wide">
          Session Time
        </div>
      </div>
    </div>
  );
}

export default Timer;
