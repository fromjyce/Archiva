import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ContractSummary = () => {
  const data = {
    labels: ['Active', 'Archived', 'Self-Destructed'],
    datasets: [
      {
        label: 'Contracts',
        data: [12, 5, 3],
        backgroundColor: ['#4CAF50', '#2196F3', '#FF5722'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Contract Lifecycle Summary
      </h2>
      <Pie data={data} />
    </section>
  );
};

export default ContractSummary;