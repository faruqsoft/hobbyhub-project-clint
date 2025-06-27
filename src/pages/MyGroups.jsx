import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const MyGroups = () => {
  const { user, loading } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://hobby-hub-project-server.vercel.app/myGroups?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setGroups(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch groups:", err);
          setIsLoading(false);
        });
    }
  }, [user]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this group?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://hobby-hub-project-server.vercel.app/groups/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setGroups((prev) => prev.filter((group) => group._id !== id));
        toast.success("Group deleted successfully");
      } else {
        toast.error(data.message || "Failed to delete group");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Server error during delete");
    }
  };

  if (loading || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-3xl font-bold mb-6 text-center">My Created Groups</h2>
      {groups.length === 0 ? (
        <p className="text-center text-gray-500">You haven’t created any groups yet.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Group Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Start Date</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group, index) => (
                <tr key={group._id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-medium">{index + 1}</td>
                  <td className="px-4 py-3">
                    <img
                      src={group.image}
                      alt={group.groupName}
                      className="w-16 h-16 rounded object-cover border"
                    />
                  </td>
                  <td className="px-4 py-3">{group.groupName}</td>
                  <td className="px-4 py-3">{group.category}</td>
                  <td className="px-4 py-3 max-w-xs truncate" title={group.description}>
                    {group.description}
                  </td>
                  <td className="px-4 py-3">{group.startDate}</td>
                  <td className="px-4 py-3 space-x-2">
                    <Link
                      to={`/updateGroup/${group._id}`}
                      className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyGroups;
