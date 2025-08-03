import Timer from "./Timer";
import HeartBeat from "./HeartBeat";
import { MdOutlinePhotoCamera } from "react-icons/md";
import Controlers from "./Controlers";
function LiveWindow() {
  return (
    <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl overflow-hidden shadow-2xl p-6">
      <div className="flex justify-between items-center">
        <Timer />
        <HeartBeat />
      </div>
      <div className="aspect-video flex items-center justify-center">
        <div className="flex flex-col items-center gap-0.5">
          <MdOutlinePhotoCamera className="text-green-500 text-7xl" />
          <p className="text-gray-400 text-xl">Trainer Video Strem</p>
        </div>
      </div>
      <div className="w-fit m-auto">
        <Controlers />
      </div>
    </div>
  );
}

export default LiveWindow;
