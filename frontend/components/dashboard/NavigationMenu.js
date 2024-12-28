import React from 'react';
import Link from 'next/link';

const NavigationMenu = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Contract Manager</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/archive" className="text-gray-700 hover:text-gray-900">
              Archive
            </Link>
          </li>
          <li>
            <Link href="/logs" className="text-gray-700 hover:text-gray-900">
              Logs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;
