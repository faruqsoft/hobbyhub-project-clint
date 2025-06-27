import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeatureGroup = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Fetch 6 latest groups
    const fetchGroups = async () => {
      const res = await fetch("https://hobby-hub-project-server.vercel.app/groups");
      const data = await res.json();
      setGroups(data.slice(0, 6));
    };
    fetchGroups();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-16 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Groups</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div key={group._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={group.image}
                alt={group.groupName}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3
                className="text-xl font-bold"
                data-tooltip-id="global-tooltip"
                data-tooltip-content={`Group: ${group.groupName}`}
              >
                {group.groupName}
              </h3>

              <p
                data-tooltip-id="global-tooltip"
                data-tooltip-content={`Category: ${group.category}`}
              >
                {group.category}
              </p>
              <p
                data-tooltip-id="global-tooltip"
                data-tooltip-content={`Category: ${group.meetingLocation}`}
                
              >
                {group.meetingLocation}
              </p>
              <p
                data-tooltip-id="global-tooltip"
                data-tooltip-content={`Category: ${group.startDate}`}
              >
                {group.startDate}
              </p>

              <Link
                to={`/group/${group._id}`}
                className="btn btn-sm btn-primary mt-2"
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
      <div className="text-center mt-6">
        <Link
          to="/groups"
          className="btn btn-outline btn-primary"
          data-tooltip-id="global-tooltip"
          data-tooltip-content="Explore all groups"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default FeatureGroup;
