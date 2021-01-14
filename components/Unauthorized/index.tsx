import { useSession } from 'next-auth/client';
import React from 'react';
import Loader from '../Icon/loader';
import SignInProviders from '../SignInProviders';
import Spinner from '../Spinner';

export default function Unauthorized() {
  const loading = useSession()[1];

  return (
    <div className="flex flex-1 justify-center items-center">
      {loading ? (
        <Spinner size={32} />
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-col text-center">
            <h1 className="text-3xl md:text-5xl leading-normal md:leading-snug font-black text-gray-900 dark:text-gray-100">
              Unauthorized
            </h1>
            <p className="font-medium text-sm">
              You must be signed in to view this page
            </p>
          </div>
          <div className="pt-8">
            <SignInProviders />
          </div>
        </div>
      )}
    </div>
  );
}
