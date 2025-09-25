'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabaseClient } from '@/lib/supabaseClient';

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (password !== confirmPassword) {
      setMessage("Passwords don't match.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabaseClient.auth.updateUser({ password });

      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage('Password updated successfully! Redirecting to login...');
        setTimeout(() => router.push('/admin/login'), 3000);
      }
    } catch (err: any) {
      setMessage(`Unexpected error: ${err.message || err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-200 via-secondary-50 to-primary-200 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">Reset Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition"
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
      </div>
    </div>
  );
}