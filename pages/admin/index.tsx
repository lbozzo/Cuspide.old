import { signOut, useSession } from 'next-auth/client';
import AdminLayout from '../../layout/Admin';

export default function AdminDashboard() {
  const session = useSession()[0];
  return (
    <AdminLayout>
      <div className="w-full mx-auto max-w-4xl my-10">
        <div className="flex flex-col">
          <h1>Authenticated</h1>
          <span>Hello, {session?.user.name}</span>
          <div className="pt-4">
            <button
              className="py-2 px-4 rounded-md w-max bg-gray-900 dark:bg-gray-600 text-white"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
