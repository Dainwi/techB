'use client';
import { useState } from 'react';
import { Client, Account } from 'appwrite';
import { useRouter } from 'next/router';

const client = new Client();
client.setEndpoint('YOUR_APPWRITE_ENDPOINT').setProject('YOUR_APPWRITE_PROJECT_ID');

const account = new Account(client);

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await account.create('unique()', email, password, name);
      await account.createSession(email, password);
      router.push('/dashboard'); // Redirect to dashboard or any protected route
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Signup</h1>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
