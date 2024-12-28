import React, { useState, useEffect } from 'react';

const LiveActivityFeed = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Simulate fetching real-time activities
    const fetchActivities = () => {
      const sampleData = [
        { id: 1, message: 'Contract #123 archived successfully.', timestamp: '2 mins ago' },
        { id: 2, message: 'Contract #456 triggered for self-destruction.', timestamp: '5 mins ago' },
        { id: 3, message: 'Contract #789 proof verified.', timestamp: '10 mins ago' },
      ];
      setActivities(sampleData);
    };

    fetchActivities();
    const interval = setInterval(fetchActivities, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Live Activity Feed</h2>
      <ul className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <li key={activity.id} className="py-2">
            <p className="text-gray-700">{activity.message}</p>
            <span className="text-gray-500 text-sm">{activity.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveActivityFeed;
