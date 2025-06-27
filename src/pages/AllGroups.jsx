import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { Tooltip } from "react-tooltip"; 
import "react-tooltip/dist/react-tooltip.css"; 

const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch("https://hobby-hub-project-server.vercel.app/groups");
        const data = await res.json();
        setGroups(data);
      } catch (error) {
        console.error("Failed to fetch groups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-3xl font-bold  mb-16">All Hobby Groups</h2>

      {/* Tooltip Component */}
      <Tooltip id="group-tooltip" place="top" className="z-50" />

      {groups.length === 0 ? (
        <p className="text-center text-gray-500">No groups found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {groups.map((group) => (
  <div
    key={group._id}
    className="bg-white rounded-2xl shadow-lg  hover:shadow-2xl transition duration-300 overflow-hidden"
  >
    <img
      src={group.image}
      alt={group.groupName}
      className="h-48 w-full object-cover"
      data-tooltip-id="group-tooltip"
      data-tooltip-content="Group Image"
    />

    <div className="p-4 flex flex-col gap-2">
      <h3
        className="text-xl font-bold text-gray-800"
        data-tooltip-id="group-tooltip"
        data-tooltip-content={`Explore ${group.groupName}`}
      >
        {group.groupName}
      </h3>

      <div className="text-lg text-gray-600 space-y-1">
        <p
          data-tooltip-id="group-tooltip"
          data-tooltip-content={`Category: ${group.category}`}
        >
          <span className="font-medium text-gray-700">Category:</span> {group.category}
        </p>
        
        <p
          data-tooltip-id="group-tooltip"
          data-tooltip-content={`Created by: ${group.userName}`}
        >
          <span className="font-medium text-gray-700">Host:</span> {group.userName}
        </p>

        <p
          data-tooltip-id="group-tooltip"
          data-tooltip-content={`Location: ${group.meetingLocation}`}
        >
          <span className="font-medium text-gray-700">Location:</span> {group.meetingLocation}
        </p>


        <p
          data-tooltip-id="group-tooltip"
          data-tooltip-content={`Start Date: ${group.startDate}`}
        >
          <span className="font-medium text-gray-700">Start Date:</span> {group.startDate}
        </p>

        

        
      </div>

      <Link
        to={`/group/${group._id}`}
        className="mt-4"
        data-tooltip-id="group-tooltip"
        data-tooltip-content="See full group details"
      >
        <button className="btn btn-primary btn-sm w-full rounded-md">
         View Details
        </button>
      </Link>
    </div>
  </div>
))}

        </div>
      )}
    </div>
  );
};

export default AllGroups;
