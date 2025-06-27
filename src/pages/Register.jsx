import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // ✅ Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return toast.error("Password must contain uppercase, lowercase and be at least 6 characters");
    }

    try {
      await register(email, password, name, photo);
      toast.success("Registration successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
      toast.error("Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 font-semibold text-center">Register</h2>
      
      <form onSubmit={handleRegister} className="space-y-4">
        <input name="name" type="text" required placeholder="Name" className="input input-bordered w-full" />
        <input name="email" type="email" required placeholder="Email" className="input input-bordered w-full" />
        <input
          name="photo"
          type="text"
          required
          placeholder="Photo URL"
          className="input input-bordered w-full"
          onChange={(e) => setPhotoPreview(e.target.value)}
        />
        {photoPreview && (
          <div className="flex justify-center mt-2">
            <img src={photoPreview} alt="Preview" className="w-24 h-24 rounded-full object-cover" />
          </div>
        )}
        <input name="password" type="password" required placeholder="Password" className="input input-bordered w-full" />
        <button type="submit" className="btn btn-primary w-full">Register</button>
      </form>

      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 font-semibold">Login</Link>
      </p>

      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
};

export default Register;
