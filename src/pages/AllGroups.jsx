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

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
        All Hobby Groups
      </h2>

      <Tooltip id="group-tooltip" place="top" className="z-50" />

      {groups.length === 0 ? (
        <p className="text-center text-gray-500">No groups found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {groups.map((group) => (
            <div
              key={group._id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300"
            >
              <img
                src={group.image}
                alt={group.groupName}
                className="h-48 w-full object-cover rounded-t-2xl"
                data-tooltip-id="group-tooltip"
                data-tooltip-content="Group Image"
              />

              <div className="p-5 flex flex-col gap-2">
                <h3
                  className="text-xl font-bold text-indigo-700 dark:text-indigo-400"
                  data-tooltip-id="group-tooltip"
                  data-tooltip-content={`Explore ${group.groupName}`}
                >
                  {group.groupName}
                </h3>

                <div className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <p
                    data-tooltip-id="group-tooltip"
                    data-tooltip-content={`Category: ${group.category}`}
                  >
                    <span className="font-medium text-gray-700 dark:text-gray-200">Category:</span>{" "}
                    {group.category}
                  </p>

                  <p
                    data-tooltip-id="group-tooltip"
                    data-tooltip-content={`Created by: ${group.userName}`}
                  >
                    <span className="font-medium text-gray-700 dark:text-gray-200">Host:</span>{" "}
                    {group.userName}
                  </p>

                  <p
                    data-tooltip-id="group-tooltip"
                    data-tooltip-content={`Location: ${group.meetingLocation}`}
                  >
                    <span className="font-medium text-gray-700 dark:text-gray-200">Location:</span>{" "}
                    {group.meetingLocation}
                  </p>

                  <p
                    data-tooltip-id="group-tooltip"
                    data-tooltip-content={`Start Date: ${group.startDate}`}
                  >
                    <span className="font-medium text-gray-700 dark:text-gray-200">Start Date:</span>{" "}
                    {group.startDate}
                  </p>
                </div>

                <Link
                  to={`/group/${group._id}`}
                  className="mt-4"
                  data-tooltip-id="group-tooltip"
                  data-tooltip-content="See full group details"
                >
                  <button className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm transition">
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
