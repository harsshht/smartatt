// Profile.js
import React from "react";

import PROFILE_PICTURE_URL from "./sc.png";

const Profile = () => {
  // Assume user data fetched from API
  const user = {
    id: 1,
    profilePicture: PROFILE_PICTURE_URL,
    fullName: "Harshit Shukla",
    role: "Student", // or 'Professor'
    phoneNumber: "123-456-7890",
    email: "Harshit@example.com",
    studentInformation: {
      fullName: "Harshit Shukla",
      studentId: "S123456",
      dateOfBirth: "1990-01-01",
      gender: "Male",
      address: "123 Main St, City, Country",
    },
    academicInformation: {
      university: "University Name",
      department: "Computer Science",
      program: "Bachelor's",
      yearOfStudy: "3rd Year",
      gpa: "3.5",
    },
  };

  const handleEditProfile = () => {
    // Add logic to navigate to the edit profile page
  };

  const handleLogout = () => {
    // Add logic to handle user logout
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="text-center w-3/4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 mx-auto"
        />
        <h2 className="text-2xl font-bold mb-2">{user.fullName}</h2>
        <p className="text-gray-500 mb-2">{user.role}</p>
        <div className="mb-4">
          <p>
            <strong>Phone:</strong> {user.phoneNumber}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {user.role === "Student" && (
            <>
              <p>
                <strong>Student ID:</strong> {user.studentInformation.studentId}
              </p>
              <p>
                <strong>Date of Birth:</strong>{" "}
                {user.studentInformation.dateOfBirth}
              </p>
              <p>
                <strong>Gender:</strong> {user.studentInformation.gender}
              </p>
              <p>
                <strong>Address:</strong> {user.studentInformation.address}
              </p>
            </>
          )}
          {user.role === "Professor" && (
            <>
              <p>
                <strong>Department:</strong>{" "}
                {user.academicInformation.department}
              </p>
              <p>
                <strong>University:</strong>{" "}
                {user.academicInformation.university}
              </p>
              <p>
                <strong>Program:</strong> {user.academicInformation.program}
              </p>
              <p>
                <strong>Year of Study:</strong>{" "}
                {user.academicInformation.yearOfStudy}
              </p>
              <p>
                <strong>GPA:</strong> {user.academicInformation.gpa}
              </p>
            </>
          )}
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
