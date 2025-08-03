import toast from "react-hot-toast";
import { useData } from "../context/DataContext";
import Chat from "../UI/Chat";
import LiveWindow from "../UI/LiveWindow";
import TrainnerProfile from "../UI/TrainnerProfile";

function LiveSession() {
  const { login, data, dispatch } = useData();
  if (login) {
    toast.success(`Hi ${data.name} it's good to see you back`);
    dispatch({ type: "login/deleteMessage" });
  }
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="live-window lg:col-span-3">
            <LiveWindow />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <TrainnerProfile />
            <Chat />
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveSession;
