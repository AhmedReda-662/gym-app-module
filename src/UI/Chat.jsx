import { CiChat1 } from "react-icons/ci";
import { AiOutlineSound } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useData } from "../context/DataContext";
import toast from "react-hot-toast";
function Chat() {
  const { messages, data, dispatch } = useData();
  const [mute, setMute] = useState(false);
  const [message, setMessage] = useState("");
  function handleMessage(e) {
    setMessage(e.target.value);
  }
  function handleClick() {
    toast.success("You Add A Message");
    dispatch({
      type: "chat/addmessage",
      payload: { id: Date.now(), name: "You", message },
    });
    setMessage("");
  }
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 flex flex-col h-96">
      <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
        <div className="flex items-center space-x-2">
          <div>
            <CiChat1 className="text-blue-400 text-2xl" />
          </div>
          <h3 className="font-semibold text-white">Live Chat</h3>
        </div>
        <button
          className="p-1 hover:bg-gray-600/50 rounded-lg transition-colors cursor-pointer"
          onClick={() => setMute((e) => !e)}
        >
          {mute ? <IoIosClose /> : <AiOutlineSound />}
        </button>
      </div>
      {!mute && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <div className="flex space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium bg-blue-600">
                A
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-blue-400">
                    John Doe
                  </span>
                  <span className="px-1.5 py-0.5 bg-blue-600/20 text-blue-300 text-xs rounded border border-blue-600/30">
                    Trainer
                  </span>
                </div>
                <p className="text-sm text-gray-200 mt-1">
                  Remember to keep your core engaged during the planks
                </p>
              </div>
            </div>
            {messages?.map((i) => {
              return (
                <div className="flex space-x-3" key={i.id}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium bg-gray-600">
                    {data?.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-blue-400">
                        {i.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-200 mt-1">{i.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-4 border-t border-gray-700/50">
            <div className="flex space-x-2">
              <input
                className="flex-1 bg-gray-700/50 border border-gray-600/50 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                type="text"
                placeholder="Type a message..."
                onChange={handleMessage}
                value={message}
              />
              <button
                className={`p-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors cursor-pointer`}
                disabled={!message.length}
                onClick={handleClick}
              >
                <IoIosSend className="text-white" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Chat;
