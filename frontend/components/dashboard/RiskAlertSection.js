import React from 'react';

const RiskAlertSection = () => {
  const risks = [
    { id: 1, message: 'Contract #123 is nearing archival trigger (2 days remaining).', level: 'Medium' },
    { id: 2, message: 'Contract #456 has exceeded its scheduled self-destruction date.', level: 'High' },
  ];

  const levelColors = {
    Low: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Risk Alerts</h2>
      <ul className="divide-y divide-gray-200">
        {risks.map((risk) => (
          <li key={risk.id} className="py-2">
            <p className="text-gray-700">{risk.message}</p>
            <span className={`text-sm px-2 py-1 rounded ${levelColors[risk.level]}`}>
              {risk.level} Risk
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RiskAlertSection;
