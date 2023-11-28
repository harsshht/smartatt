import React, { useState, useRef } from "react";
import { FaMapMarkerAlt, FaCheckCircle, FaCamera } from "react-icons/fa";

const Verification = () => {
  const [locationVerified, setLocationVerified] = useState(false);
  const [capturedSelfie, setCapturedSelfie] = useState(null);
  const cameraRef = useRef(null);

  const handleVerifyLocation = () => {
    // Simulate location verification logic with dummy data
    setLocationVerified(true);
  };

  const handleCaptureSelfie = () => {
    // Simulate capturing selfie with dummy image
    const dummySelfie = "https://example.com/dummy-selfie.jpg";
    setCapturedSelfie(dummySelfie);
  };

  return (
    <div className="h-screen w-full bg-black p-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Verification</h2>

      {/* Verification Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
        {/* Location Verification */}
        <div className="mb-6 p-6 bg-gray-700 rounded-lg flex flex-col items-center">
          <div className="flex items-center justify-center h-full">
            <FaMapMarkerAlt className="text-4xl text-white" />
          </div>
          {!locationVerified && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleVerifyLocation}
            >
              Verify Location
            </button>
          )}
          {locationVerified && (
            <div className="flex items-center space-x-2 mt-4">
              <FaCheckCircle className="text-4xl text-green-500 " />
              <p className="text-lg font-semibold text-white">
                Location Verified!
              </p>
            </div>
          )}
        </div>

        {/* Selfie Verification */}
        <div className="p-6 bg-gray-700 rounded-lg flex flex-col items-center">
          <div className="mb-4">
            <div className="w-full h-64 bg-gray-700 mb-4 rounded-lg overflow-hidden relative">
              {capturedSelfie ? (
                <img
                  src={capturedSelfie}
                  alt="Captured Selfie"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <FaCamera className="text-4xl text-white" />
                </div>
              )}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleCaptureSelfie}
            >
              Capture Selfie
            </button>
          </div>

          {/* Display Captured Selfie */}
          {capturedSelfie && (
            <div className="flex flex-col items-center space-y-2 mt-4">
              <FaCheckCircle className="text-4xl text-green-500" />
              <p className="text-lg font-semibold text-white">
                Selfie Captured!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verification;
