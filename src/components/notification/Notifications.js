import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulated API response with dummy notifications
    const dummyNotifications = [
      { title: 'Attendance Update', message: 'Your attendance for Math class is updated.' },
      { title: 'New Announcement', message: 'Check out the latest announcement for Physics class.' },
      { title: 'Reminder', message: 'Don’t forget about the upcoming Chemistry lab session.' },
    ];

    // Simulate API call with a delay
    const fetchData = async () => {
      try {
        // Simulate delay with setTimeout
        setTimeout(() => {
          setNotifications(dummyNotifications);
        }, 1000);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-full bg-black p-8 ">
      <h2 className="text-2xl font-bold mb-4 text-white">Notifications</h2>

      {notifications.length === 0 ? (
        <p>No notifications at the moment.</p>
      ) : (
        <ul className="list-disc pl-4">
          {notifications.map((notification, index) => (
            <li
              key={index}
              className={`mb-2 p-4 bg-gray-800 rounded ${
                // Example: Highlight important notifications
                index === 0 ? 'border-2 border-yellow-400' : ''
              }`}
            >
              <strong>{notification.title}:</strong> {notification.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
