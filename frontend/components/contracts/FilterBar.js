import React from 'react';

const FilterBar = ({ filter, setFilter }) => {
  const filters = ['All', 'Active', 'Archived', 'Destructed'];

  return (
    <div className="mb-6 flex space-x-4">
      {filters.map((f) => (
        <button
          key={f}
          className={`px-4 py-2 rounded ${
            filter === f
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
          }`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
