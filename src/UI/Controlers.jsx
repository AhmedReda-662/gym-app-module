import { IoPlayOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { BsDisplay } from "react-icons/bs";
import { FaRegSquareFull } from "react-icons/fa6";
import { CiPause1 } from "react-icons/ci";
import { BsMicMute } from "react-icons/bs";
import { FiCameraOff } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";
import { useData } from "../context/DataContext";
import { useState } from "react";
import toast from "react-hot-toast";
import useControllers from "../hooks/useControllers";
function Controlers() {
  const { dispatch } = useData();
  const [running, setRunning] = useState(false);
  const [toggle, setToggle] = useState(true);
  function handleToggle() {
    if (toggle) {
      toast.success("You Stoped The Timer");
      dispatch({ type: "timer/stoptimer" });
      setToggle(false);
    } else {
      toast.success("You Started The Timer");
      dispatch({ type: "timer/starttimer" });
      setToggle(true);
    }
  }
  const { micOpen, setMicOpen, camOpen, setCamOpen } = useControllers();
  return (
    <div className="bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-600/30">
      <div className="flex items-center space-x-4">
        {!running ? (
          <button
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-xl font-medium transition-colors text-white cursor-pointer"
            onClick={() => {
              toast.success("You Started The Timer");
              dispatch({ type: "timer/starttimer" });
              setRunning(true);
            }}
          >
            <IoPlayOutline />
            <span className="text-bold hidden md:block">Start Session</span>
          </button>
        ) : (
          <>
            <button
              className="p-3 bg-yellow-600 hover:bg-yellow-700 rounded-xl transition-colors cursor-pointer"
              onClick={handleToggle}
            >
              {toggle ? <CiPause1 /> : <IoPlayOutline />}
            </button>
            <button
              className="p-3 bg-red-600 hover:bg-red-700 rounded-xl transition-colors cursor-pointer"
              onClick={() => {
                toast.success("The Timer Has Been Reseted");
                dispatch({ type: "timer/resettimer" });
                setRunning(false);
              }}
            >
              <FaRegSquareFull />
            </button>
          </>
        )}
        <div className="w-px h-8 bg-gray-600" />
        <button
          className={`p-3.5 rounded-xl transition-colors ${
            camOpen
              ? "bg-gray-600 hover:bg-gray-700 "
              : "bg-red-600 hover:bg-red-700"
          } cursor-pointer`}
          onClick={() => setCamOpen((e) => !e)}
        >
          {camOpen ? (
            <FiCamera className="text-white text-xl" />
          ) : (
            <FiCameraOff className="text-white text-xl" />
          )}
        </button>
        <button
          className={`p-3.5 rounded-xl transition-colors ${
            micOpen
              ? "bg-gray-600 hover:bg-gray-700 "
              : "bg-red-600 hover:bg-red-700"
          } cursor-pointer`}
          onClick={() => setMicOpen((e) => !e)}
        >
          {micOpen ? (
            <IoMicOutline className="text-white text-xl" />
          ) : (
            <BsMicMute className="text-white text-xl" />
          )}
        </button>
        <button className="p-3.5 rounded-xl transition-colors bg-gray-600 hover:bg-gray-700 cursor-pointer">
          <BsDisplay className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Controlers;
