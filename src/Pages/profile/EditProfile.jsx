import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";


const EditProfile = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      alert("Profile updated successfully ✅");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Edit Profile
        </h2>

        <form onSubmit={handleUpdateProfile} className="space-y-5">
          <div>
            <label className="font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg"
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditProfile;
