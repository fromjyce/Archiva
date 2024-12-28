import React from 'react';
import NavigationMenu from '@/components/dashboard/NavigationMenu';
import ContractSummary from '@/components/dashboard/ContractSummary';
import NotificationCard from '@/components/dashboard/NotificationCard';
import ContractTable from '@/components/dashboard/ContractTable';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Menu */}
      <NavigationMenu />

      {/* Page Content */}
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

        {/* Contract Lifecycle Summary */}
        <ContractSummary />

        {/* Notifications */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NotificationCard
              type="info"
              message="Contract #123 is approaching archival in 2 days."
            />
            <NotificationCard
              type="warning"
              message="Contract #456 is set for self-destruction tomorrow."
            />
          </div>
        </section>

        {/* Contracts Table */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Contracts</h2>
          <ContractTable />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
