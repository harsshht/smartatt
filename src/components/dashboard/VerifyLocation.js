import React, { useState } from 'react';

const VerifyLocation = () => {
  const [locationDetails, setLocationDetails] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    city: 'San Francisco',
    country: 'United States',
  });

  const handleVerifyLocation = () => {
    // You can implement location verification logic here
    // For now, let's update the location details with dummy data
    setLocationDetails({
      latitude: 40.7128,
      longitude: -74.0060,
      city: 'New York',
      country: 'United States',
    });
  };

  return (
    <div className="container mx-auto mt-8 bg-gray-800 text-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Verify Location</h2>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleVerifyLocation}
        >
          Verify My Location
        </button>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Location Details:</h3>
        <p>
          <strong>Latitude:</strong> {locationDetails.latitude}
        </p>
        <p>
          <strong>Longitude:</strong> {locationDetails.longitude}
        </p>
        <p>
          <strong>City:</strong> {locationDetails.city}
        </p>
        <p>
          <strong>Country:</strong> {locationDetails.country}
        </p>
      </div>
    </div>
  );
};

export default VerifyLocation;
