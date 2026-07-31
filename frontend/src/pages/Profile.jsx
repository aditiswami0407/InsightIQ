import MainLayout from "../layouts/MainLayout";
import "../styles/Profile.css";

import {
  FaUserCircle,
  FaEnvelope,
  FaUserTie,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
} from "react-icons/fa";

function Profile() {

  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (

    <MainLayout>

      <div className="profile-page">

        <div className="profile-header">

          <h1>My Profile</h1>

          <button className="edit-btn">

            <FaEdit />

            Edit Profile

          </button>

        </div>

        <div className="profile-card">

          <div className="profile-avatar">

            <FaUserCircle />

          </div>

          <div className="profile-details">

            <h2>{user.name || "Administrator"}</h2>

            <p>{user.role || "Admin"}</p>

          </div>

        </div>

        <div className="info-grid">

          <div className="info-card">

            <FaEnvelope />

            <div>

              <h3>Email</h3>

              <p>{user.email || "admin@insightiq.com"}</p>

            </div>

          </div>

          <div className="info-card">

            <FaUserTie />

            <div>

              <h3>Department</h3>

              <p>Management</p>

            </div>

          </div>

          <div className="info-card">

            <FaPhone />

            <div>

              <h3>Phone</h3>

              <p>+91 9876543210</p>

            </div>

          </div>

          <div className="info-card">

            <FaMapMarkerAlt />

            <div>

              <h3>Location</h3>

              <p>Pune, Maharashtra</p>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}

export default Profile;