'use client';

import { useState } from 'react';
import { supabaseClient } from '@/lib/supabaseClient';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Submitting email for password reset:', email);
    
    const { data: user } = await supabaseClient
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    console.log('User found:', user); 

    // Reset password email without redirect
    const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Check your email for the password reset link.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-200 via-secondary-50 to-primary-200 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-8">
          <h1 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h1>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
          <button
            type="submit"
            className="w-full py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition"
          >
            Send Reset Link
          </button>
          {message && <p className="mb-4 text-center text-sm text-gray-700">{message}</p>}
        </form>
      </div>
    </div>
  );
}