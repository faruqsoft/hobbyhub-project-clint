import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const CreateGroup = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const newGroup = {
      groupName: form.groupName.value,
      category: form.category.value,
      description: form.description.value,
      meetingLocation: form.meetingLocation.value,
      maxMembers: parseInt(form.maxMembers.value),
      startDate: form.startDate.value,
      image: form.image.value,
      userName: user.displayName,
      userEmail: user.email,
    };

    try {
      const res = await fetch("https://hobby-hub-project-server.vercel.app/groups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGroup),
      });

      const data = await res.json();
      if (data && data._id) {
        toast.success("Group created successfully!");
        form.reset();
      } else {
        toast.error("Failed to create group");
      }
    } catch (err) {
      toast.error("Error creating group");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4 py-10">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create a New Hobby Group
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="groupName"
            placeholder="Group Name"
            className="input input-bordered w-full"
            required
          />
          <select name="category" className="select select-bordered w-full" required>
            <option value="">Select Hobby Category</option>
            <option>Drawing & Painting</option>
            <option>Photography</option>
            <option>Video Gaming</option>
            <option>Fishing</option>
            <option>Running</option>
            <option>Cooking</option>
            <option>Reading</option>
            <option>Writing</option>
          </select>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            required
          />
          <input
            name="meetingLocation"
            placeholder="Meeting Location"
            className="input input-bordered w-full"
            required
          />
          <input
            name="maxMembers"
            type="number"
            placeholder="Max Members"
            className="input input-bordered w-full"
            required
          />
          <input
            name="startDate"
            type="date"
            className="input input-bordered w-full"
            required
          />
          <input
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />
          <input
            readOnly
            value={user?.displayName}
            className="input input-bordered w-full"
          />
          <input
            readOnly
            value={user?.email}
            className="input input-bordered w-full "
          />
          <button
            type="submit"
            className="btn btn-primary w-full transition hover:scale-105 duration-200"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
