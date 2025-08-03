import { FaStar } from "react-icons/fa";
function TrainnerProfile() {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
      <div className="text-center mb-4">
        <img
          src="/trainner-photo.jpg"
          className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-blue-500/30"
          alt="trainner-photo"
        />
        <h3 className="text-xl font-bold text-white">John Doe</h3>
        <div className="flex items-center justify-center space-x-1 mt-1">
          <FaStar className="text-yellow-400" />
          <span className="text-yellow-400 font-medium">4.9</span>
          <span className="text-gray-400 text-sm">(100 sessions)</span>
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-300 mb-2">Specialties</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-lg border border-blue-600/30">
            HIIT
          </span>
          <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-lg border border-blue-600/30">
            Strength Training
          </span>
          <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-lg border border-blue-600/30">
            Mobility
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-gray-400">Experience</p>
            <p className="font-medium text-white">8 years</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Certified</p>
            <p className="font-medium text-white">NASM-CPT, ACSM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainnerProfile;
