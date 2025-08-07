import useTimer from "../hooks/useTimer";

function Timer() {
  const time = useTimer();
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl px-4 py-2 border border-gray-600/30">
      <div className="text-center">
        <div className="text-2xl font-mono font-bold text-green-400">
          <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}</span>:
          <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}</span>
        </div>
        <div className="text-xs text-gray-300 uppercase tracking-wide">
          Session Time
        </div>
      </div>
    </div>
  );
}

export default Timer;
