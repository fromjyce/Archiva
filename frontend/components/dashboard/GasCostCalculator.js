import React, { useState } from 'react';

const GasCostCalculator = () => {
  const [action, setAction] = useState('archive');
  const [gasCost, setGasCost] = useState(null);

  const calculateGasCost = () => {
    // Mock gas cost values
    const cost = action === 'archive' ? 0.0025 : 0.0045; // Example values
    setGasCost(cost);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gas Cost Calculator</h2>
      <div className="flex flex-col space-y-4">
        <select
          className="border rounded p-2"
          value={action}
          onChange={(e) => setAction(e.target.value)}
        >
          <option value="archive">Archive Contract</option>
          <option value="self-destruct">Self-Destruct Contract</option>
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={calculateGasCost}
        >
          Calculate Gas Cost
        </button>
        {gasCost !== null && (
          <p className="text-gray-700">Estimated Gas Cost: {gasCost} APT</p>
        )}
      </div>
    </div>
  );
};

export default GasCostCalculator;
