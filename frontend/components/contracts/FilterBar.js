import React from 'react';

const FilterBar = ({ filter, setFilter }) => {
  const filters = ['All', 'Active', 'Archived', 'Destructed'];

  return (
    <div className="mb-6 flex space-x-4 poppins">
      {filters.map((f) => (
        <button
          key={f}
          className={`px-4 py-2 rounded ${
            filter === f
              ? 'bg-[#c8553dff] text-[#f4f4f4]'
              : 'bg-[#dcdcdc] text-[#343434] hover:bg-[#d37764]'
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
