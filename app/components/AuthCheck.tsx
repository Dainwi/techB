'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Client, Account } from 'appwrite';
import Loader from './Loader';

const client = new Client();
client.setEndpoint('YOUR_APPWRITE_ENDPOINT').setProject('YOUR_APPWRITE_PROJECT_ID');

const account = new Account(client);

const AuthCheck = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await account.get();
        // If successful, user is logged in
        if (pathname === '/login' || pathname === '/signup') {
          router.push('/dashboard');
        }
      } catch (error) {
        // If an error occurs, user is not logged in
        if (pathname !== '/login' && pathname !== '/signup') {
          router.push('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [pathname, router]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthCheck;
