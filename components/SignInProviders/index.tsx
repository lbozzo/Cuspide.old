import { providers, signIn } from 'next-auth/client';
import { useEffect, useState } from 'react';
import Spinner from '../Spinner';

export default function SignInProviders() {
  const [list, setList] = useState<any>();
  useEffect(() => {
    async function getProviders() {
      const result = await providers();
      setList(result);
    }
    getProviders();
  }, []);

  return list ? (
    <div className="flex flex-1 flex-col items-center mx-auto w-52">
      {Object.values<{ name: string; id: string }>(list).map((provider) => (
        <div key={provider.id} className="w-full my-2">
          <button
            onClick={() => signIn(provider.id)}
            className="w-full px-8 py-2 rounded-md bg-gray-900 dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-600"
          >
            <span className="font-medium text-sm text-gray-50 dark:text-gray-100">
              {provider.name}
            </span>
          </button>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-gray-800 dark:text-gray-50">
      <Spinner />
    </div>
  );
}
