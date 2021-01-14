import { useSession } from 'next-auth/client';
import React from 'react';
import Navbar from '../components/Navbar';
import Unauthorized from '../components/Unauthorized';

const AdminLayout: React.FC = ({ children }) => {
  const session = useSession()[0];

  return (
    <div className="flex flex-1 min-h-screen px-8 py-3 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="flex flex-1 flex-col">
        <Navbar />
        {!session ? <Unauthorized /> : <main>{children}</main>}
      </div>
    </div>
  );
};

export default AdminLayout;
