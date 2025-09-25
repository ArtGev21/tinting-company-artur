'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserPlus } from 'lucide-react';

export default function AdminSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/admin/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Account created! Redirecting...' });
        setTimeout(() => router.push('/admin/login'), 1500);
      } else {
        setMessage({ type: 'error', text: data.error || 'Signup failed' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Network error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-200 via-secondary-50 to-primary-200 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-semibold text-center mb-6">Admin Signup</h1>

        {message && (
          <div
            className={`p-3 mb-4 rounded ${
              message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 px-3 py-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 px-3 py-2"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-700"
          >
            <UserPlus size={18} />
            {isLoading ? 'Creating...' : 'Sign Up'}
          </button>
          <p className="text-center"><a href="/admin/login" className="text-primary-600 hover:underline">Log in</a></p>
        </form>
      </div>
    </div>
  );
}