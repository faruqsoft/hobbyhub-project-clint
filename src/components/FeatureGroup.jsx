import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeatureGroup = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const res = await fetch("https://hobby-hub-project-server.vercel.app/groups");
      const data = await res.json();
      setGroups(data.slice(0, 6));
    };
    fetchGroups();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-700">
        Featured Groups
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groups.map((group) => (
          <div
            key={group._id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <figure>
              <img
                src={group.image}
                alt={group.groupName}
                className="h-52 w-full object-cover rounded-t-2xl"
              />
            </figure>
            <div className="p-5 space-y-2">
              <h3
                className="text-xl font-semibold text-purple-600 dark:text-purple-400"
                data-tooltip-id="global-tooltip"
                data-tooltip-content={`Group: ${group.groupName}`}
              >
                {group.groupName}
              </h3>

              <p
                className="text-gray-600 dark:text-gray-300 text-sm"
                data-tooltip-id="global-tooltip"
                data-tooltip-content={`Category: ${group.category}`}
              >
                📌 Category: {group.category}
              </p>

              <p
                className="text-gray-600 dark:text-gray-300 text-sm"
                data-tooltip-id="global-tooltip"
                data-tooltip-content={`Location: ${group.meetingLocation}`}
              >
                📍 Location: {group.meetingLocation}
              </p>

              <p
                className="text-gray-600 dark:text-gray-300 text-sm"
                data-tooltip-id="global-tooltip"
                data-tooltip-content={`Start Date: ${group.startDate}`}
              >
                🗓️ Start Date: {group.startDate}
              </p>

              <Link
                to={`/group/${group._id}`}
                className="inline-block mt-4 px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-md text-sm transition"
                data-tooltip-id="global-tooltip"
                data-tooltip-content="Click to view group details"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Link
          to="/groups"
          className="px-6 py-2 text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white rounded-full transition duration-300"
          data-tooltip-id="global-tooltip"
          data-tooltip-content="Explore all groups"
        >
          View All Groups
        </Link>
      </div>
    </div>
  );
};

export default FeatureGroup;
