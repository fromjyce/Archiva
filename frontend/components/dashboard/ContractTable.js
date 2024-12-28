import React from 'react';

const ContractTable = () => {
  const contracts = [
    { id: 123, state: 'Active', action: 'Archive' },
    { id: 456, state: 'Active', action: 'Self-Destruct' },
    { id: 789, state: 'Archived', action: 'View Proof' },
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-x-auto">
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Contract ID</th>
            <th className="px-4 py-2">State</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td className="border px-4 py-2">{contract.id}</td>
              <td className="border px-4 py-2">{contract.state}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  {contract.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractTable;
