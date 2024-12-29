import React, { useState } from 'react';
import ContractDetailsModal from '@/components/contracts/ContractDetailsModal';
import FilterBar from '@/components/contracts/FilterBar';
import Sidebar from '@/components/Sidebar';

const Contracts = () => {
  const [selectedContract, setSelectedContract] = useState(null);
  const [filter, setFilter] = useState('Active');
  const [contracts, setContracts] = useState([
    { id: 289011329, state: 'Archived', createdAt: '2024-12-29', ipfsLink: 'https://ipfs.io/ipfs/QmT5NvUtoM5nWFfrQdVrFtvGfKFmG7AHE8P34isapyhCxX', archivedAt: "12/29/2024 07:59:11", verified: false },
    { id: 286699744, state: 'Active', createdAt: '2024-12-29', ipfsLink: 'https://ipfs.io/ipfs/Cf7wy3s1mvbt2apko94gx8dqwnhmje5plvku6rdq29oxciy7ltaebnm54qyd', archivedAt: null, verified: false },
    { id: 282579363, state: 'Active', createdAt: '2024-12-28', ipfsLink: 'https://ipfs.io/ipfs/Vpl9qmye47czbdhn2fows6kax3t8riv5pgjqoucm7wyhtl2dxabrkc98qojn', archivedAt: null, verified: false },
    { id: 278340692, state: 'Active', createdAt: '2024-12-28', ipfsLink: 'https://ipfs.io/ipfs/Axmjtbr8qlf9pwy5nkdc7ovz2ih36gocxfqtlydr24kmavje95obwztqrnl', archivedAt: null, verified: false },
  ]);

  const [archivedContracts, setArchivedContracts] = useState([]);
  const [walletAddress, setWalletAddress] = useState('0x430968a8bda6b01272650faa4058f983e5c5f351895b06783e42bedec502b462');
  const [balance, setBalance] = useState(3.979841); 

  const filteredContracts = filter === 'All' ? contracts : contracts.filter((contract) => contract.state === filter);

  const handleArchive = (contractId) => {
    if (window.confirm('Are you sure you want to archive this contract?')) {
      const updatedContracts = contracts.map((contract) =>
        contract.id === contractId ? { ...contract, state: 'Archived', archivedAt: new Date().toISOString() } : contract
      );
      setContracts(updatedContracts);
      setTimeout(() => {
        alert(`Contract ${contractId} archived successfully!`);
      }, 1000);
    }
  };

  const handleReinitiate = (contractId) => {
    setTimeout(() => {
      const updatedContracts = contracts.map((contract) =>
        contract.id === contractId ? { ...contract, state: 'Active', archivedAt: null } : contract
      );
      setContracts(updatedContracts);
      setTimeout(() => {
        alert(`Contract ${contractId} re-initiated successfully!`);
      }, 1000);
    }, 2000);
  };

  const handleVerify = (contractId) => {
    setTimeout(() => {
      setContracts(prevContracts => {
        const updatedContracts = prevContracts.map((contract) =>
          contract.id === contractId ? { ...contract, verified: true } : contract
        );
        return updatedContracts;
      });
  
      setTimeout(() => {
        setContracts(prevContracts => {
          const revertContracts = prevContracts.map((contract) =>
            contract.id === contractId ? { ...contract, verified: false } : contract
          );
          return revertContracts;
        });
      }, 30000);  // Revert delay
    }, 2000);  // Verification delay
  };
  

  const handleVerifyAll = () => {
    setTimeout(() => {
      const updatedContracts = contracts.map((contract) => ({ ...contract, verified: true }));
      setContracts(updatedContracts);

      setTimeout(() => {
        const revertContracts = contracts.map((contract) => ({ ...contract, verified: false }));
        setContracts(revertContracts);
      }, 30000); // Revert after 30 seconds
    }, 2000); // Verification delay
  };

  const archivedContractsList = contracts.filter((contract) => contract.state === 'Archived');

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex-1 ml-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 px-8 py-4">Manage Your Contracts</h1>
        <div className="flex justify-between px-8">
          <div className="flex-1 bg-blue-50 rounded-lg p-6 shadow-md mr-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Wallet Address</h2>
            <p className="text-xl text-gray-600 break-all">{walletAddress}</p>
            <p className="text-lg text-gray-700 mt-4">
              <span className="font-medium">Balance:</span> {balance} APT
            </p>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-bold text-gray-800">Total Contracts</h3>
              <p className="text-2xl font-bold text-blue-500">{contracts.length}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-bold text-gray-800">Average Archival Time</h3>
              <p className="text-2xl font-bold text-blue-500">15 mins</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-bold text-gray-800">Gas Fees (Avg)</h3>
              <p className="text-2xl font-bold text-blue-500">0.002 APT</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-8 py-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Your Smart Contracts</h2>
          <FilterBar filter={filter} setFilter={setFilter} />
          <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-6">
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">Contract ID</th>
                  <th className="px-4 py-2">State</th>
                  <th className="px-4 py-2">Created At</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredContracts.map((contract) => (
                  <tr key={contract.id}>
                    <td className="border px-4 py-2">{contract.id}</td>
                    <td className="border px-4 py-2">{contract.state}</td>
                    <td className="border px-4 py-2">{contract.createdAt}</td>
                    <td className="border px-4 py-2">
                      <div className="flex space-x-2">
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded"
                          onClick={() => handleArchive(contract.id)}
                        >
                          Archive
                        </button>
                        <button
                          className="bg-blue-500 text-white px-3 py-1 rounded"
                          onClick={() => setSelectedContract(contract)}
                        >
                          View Details
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selectedContract && (
            <ContractDetailsModal
              contract={selectedContract}
              onClose={() => setSelectedContract(null)}
            />
          )}
        </div>
        <div className="container mx-auto px-8 py-6 flex space-x-8">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Archived Contracts</h2>
            <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-6">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2">Contract ID</th>
                    <th className="px-4 py-2">Archived At</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {archivedContractsList.map((contract) => (
                    <tr key={contract.id}>
                      <td className="border px-4 py-2">{contract.id}</td>
                      <td className="border px-4 py-2">{contract.archivedAt}</td>
                      <td className="border px-4 py-2">
                        <div className="flex space-x-2">
                          <button
                            className="bg-green-500 text-white px-3 py-1 rounded"
                            onClick={() => handleReinitiate(contract.id)}
                          >
                            Re-initiate
                          </button>
                          <button
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                            onClick={() => setSelectedContract(contract)}
                          >
                            View Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Validate Your Blocks</h2>
            <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-6">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2">Contract ID</th>
                    <th className="px-4 py-2">Verified</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContracts.map((contract) => (
                    <tr key={contract.id}>
                      <td className="border px-4 py-2">{contract.id}</td>
                      <td className="border px-4 py-2">
                        {contract.verified ? 'Verified' : 'Not Verified'}
                      </td>
                      <td className="border px-4 py-2">
                        <div className="flex space-x-2">
                          <button
                            className="bg-green-500 text-white px-3 py-1 rounded"
                            onClick={() => handleVerify(contract.id)}
                          >
                            Verify
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleVerifyAll}
              >
                Verify All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contracts;
