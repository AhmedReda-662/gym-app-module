import { BiHeart } from "react-icons/bi";

function HeartBeat() {
  return (
    <div className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-gray-600/30">
      <div className="flex items-center space-x-2">
        <BiHeart className="text-red-700" />
        <p className="text-sm text-red-600 font-bold">
          128 <span className="text-gray-500 text-sm font-normal">BPM</span>
        </p>
      </div>
    </div>
  );
}

export default HeartBeat;
