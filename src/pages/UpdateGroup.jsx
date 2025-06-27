import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const UpdateGroup = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [group, setGroup] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://hobby-hub-project-server.vercel.app/groups/${id}`)
      .then(res => res.json())
      .then(data => setGroup(data));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedGroup = {
      groupName: form.groupName.value,
      category: form.category.value,
      description: form.description.value,
      meetingLocation: form.meetingLocation.value,
      maxMembers: parseInt(form.maxMembers.value),
      startDate: form.startDate.value,
      image: form.image.value,
    };

    try {
      const res = await fetch(`https://hobby-hub-project-server.vercel.app/groups/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedGroup)
      });

      const data = await res.json();
      if (data.modifiedCount > 0) {
        toast.success("Group updated successfully!");
        navigate("/myGroups");
      } else {
        toast.error("Update failed or no changes made.");
      }
    } catch (err) {
      toast.error("Error updating group.");
    }
  };

  if (!group) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-5">
      <h2 className="text-2xl font-semibold mb-4">Update Group</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input name="groupName" defaultValue={group.groupName} className="input input-bordered w-full" required />
        <select name="category" className="select select-bordered w-full" required defaultValue={group.category}>
          <option>Drawing & Painting</option>
          <option>Photography</option>
          <option>Video Gaming</option>
          <option>Fishing</option>
          <option>Running</option>
          <option>Cooking</option>
          <option>Reading</option>
          <option>Writing</option>
        </select>
        <textarea name="description" defaultValue={group.description} className="textarea textarea-bordered w-full" required />
        <input name="meetingLocation" defaultValue={group.meetingLocation} className="input input-bordered w-full" required />
        <input name="maxMembers" type="number" defaultValue={group.maxMembers} className="input input-bordered w-full" required />
        <input name="startDate" type="date" defaultValue={group.startDate} className="input input-bordered w-full" required />
        <input name="image" defaultValue={group.image} className="input input-bordered w-full" required />
        <input readOnly value={user?.displayName} className="input input-bordered w-full" />
        <input readOnly value={user?.email} className="input input-bordered w-full" />
        <button type="submit" className="btn btn-primary w-full">Update Group</button>
      </form>
    </div>
  );
};

export default UpdateGroup;
