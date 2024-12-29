import React from 'react';

const ContractDetailsModal = ({ contract, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Contract Details</h2>
        <p>
          <strong>ID:</strong> {contract.id}
        </p>
        <p>
          <strong>State:</strong> {contract.state}
        </p>
        <p>
          <strong>Created At:</strong> {contract.createdAt}
        </p>
        {contract.ipfsLink && (
          <p>
            <strong>IPFS Link:</strong>{' '}
            <a
              href={contract.ipfsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {contract.ipfsLink}
            </a>
          </p>
        )}
        <div className="mt-6 flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractDetailsModal;
