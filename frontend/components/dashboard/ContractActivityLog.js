import React from 'react';

const ContractActivityLog = () => {
  const activities = [
    { id: 1, action: 'Archived', contractId: '#123', timestamp: '2024-01-01 14:00' },
    { id: 2, action: 'Self-Destructed', contractId: '#456', timestamp: '2024-01-02 10:30' },
    { id: 3, action: 'Proof Verified', contractId: '#789', timestamp: '2024-01-03 08:45' },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 overflow-x-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contract Activity Log</h2>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Contract ID</th>
            <th className="px-4 py-2">Action</th>
            <th className="px-4 py-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td className="border px-4 py-2">{activity.contractId}</td>
              <td className="border px-4 py-2">{activity.action}</td>
              <td className="border px-4 py-2">{activity.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractActivityLog;
