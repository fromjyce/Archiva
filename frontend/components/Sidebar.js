import Link from 'next/link';
import { HomeIcon, DocumentTextIcon, LogoutIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col items-center bg-[#100c08] w-16 py-4 rounded-full shadow-lg">
      <div className="group flex items-center justify-center relative">
        <Link href="/dashboard">
          <button className="flex items-center justify-center w-12 h-12 bg-[#f28f3bff] hover:bg-[#da8135] rounded-full">
            <HomeIcon className="h-6 w-6 text-[#F7FCFE]" />
          </button>
        </Link>
        <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-[#100c08] text-[#F7FCFE] text-sm px-2 py-1 rounded shadow-md">
          Home
        </span>
      </div>
      <div className="group mt-4 flex items-center justify-center relative">
        <Link href="/contracts">
          <button className="flex items-center justify-center w-12 h-12 bg-[#f28f3bff] hover:bg-[#da8135] rounded-full">
            <DocumentTextIcon className="h-6 w-6 text-[#F7FCFE]" />
          </button>
        </Link>
        <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-[#100c08] text-[#F7FCFE] text-sm px-2 py-1 rounded shadow-md">
          Contract
        </span>
      </div>
      <div className="group mt-4 flex items-center justify-center relative">
        <Link href="/">
          <button className="flex items-center justify-center w-12 h-12 bg-[#f28f3bff] hover:bg-[#da8135] rounded-full">
            <LogoutIcon className="h-6 w-6 text-[#F7FCFE]" />
          </button>
        </Link>
        <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-[#100c08] text-[#F7FCFE] text-sm px-2 py-1 rounded shadow-md">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
