import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import LoadingSpinner from "./../components/LoadingSpinner";

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://hobby-hub-project-server.vercel.app/groups/${id}`)
      .then((res) => res.json())
      .then(setGroup);
  }, [id]);

  const handleJoinGroup = () => {
    if (!user) {
      toast.error("You must be logged in to join a group.");
      return;
    }
    toast.success("You have joined the group!");
  };

  if (!group) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          src={group.image}
          alt={group.groupName}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 sm:p-10 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            {group.groupName}
          </h2>
          <p className="text-sm text-purple-500 font-medium uppercase">
            Category: {group.category}
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            {group.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-gray-600">
            <p>
              <span className="font-semibold">📍 Location:</span>{" "}
              {group.meetingLocation}
            </p>
            <p>
              <span className="font-semibold">👥 Max Members:</span>{" "}
              {group.maxMembers}
            </p>
            <p>
              <span className="font-semibold">📅 Start Date:</span>{" "}
              {group.startDate}
            </p>
            <p>
              <span className="font-semibold">🧑‍💼 Organizer:</span>{" "}
              {group.userName} (<span className="text-blue-500">{group.userEmail}</span>)
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={handleJoinGroup}
              className="btn btn-success w-full sm:w-auto transition-transform hover:scale-105"
            >
              Join Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
