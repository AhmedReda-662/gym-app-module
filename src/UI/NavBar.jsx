import { RiGroupLine } from "react-icons/ri";
import { BsDoorOpen } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useData } from "../context/DataContext";
function NavBar() {
  const navigate = useNavigate();
  const { dispatch } = useData();
  function handleLogout() {
    dispatch({ type: "login/logout" });
    navigate("/");
  }
  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-gray-700/50 p-3.5">
      <nav className="flex justify-between items-center  max-w-7xl m-auto">
        <div className="left-section flex gap-4 divide-white">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <div className="text-red-600 uppercase font-bold text-sm">Live</div>
          </div>
          <div className="w-[1.5px] h-auto bg-green-400" />
          <h2 className="text-green-400 font-bold text-2xl">
            Full Body Challenge
          </h2>
        </div>
        <div className="right-seciton flex justify-between items-center gap-4">
          <div className="flex justify-between items-center gap-2">
            <RiGroupLine className="text-gray-100" />
            <span className="text-gray-100 text-sm">47 participants</span>
          </div>
          <button
            className="text-white bg-green-500 px-2 py-1.5 rounded-md cursor-pointer  hover:bg-green-700 transition-colors"
            onClick={handleLogout}
          >
            <BsDoorOpen />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
