'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogIn } from 'lucide-react';

export default function AdminLogin() {
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
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        const userInfo = {
          email: data.user.email,
          //username: data.user.username, // if you store username
          //csrfToken: data.csrfToken     // if you generate one
        };

        // 🔑 Save user info to sessionStorage
        sessionStorage.setItem('all_user', JSON.stringify(userInfo));

        if (formData.email === "awebtestg@gmail.com" || formData.email === "rodeotint@gmail.com") {
          // Redirect to dashboard
          router.push('/admin/dashboard');
        }else{
          setMessage({ type: 'error', text: 'You are not authorized to access this page.' });
        }
      } else {
        setMessage({ type: 'error', text: data.error || 'Login failed' });
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
        <h1 className="text-4xl font-semibold text-center mb-12">Admin Login</h1>

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
            <LogIn size={18} />
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
          <p className="text-center"><a href="/admin/signup" className="text-primary-600 hover:underline">Sign up</a></p>
          <p className="text-center"><a href="/admin/forgot-password" className="text-primary-600 hover:underline">Forgot password</a></p>
        </form>
      </div>
    </div>
  );
}