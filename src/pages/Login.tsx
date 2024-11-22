import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import Background3D from '../components/Background3D';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      <Background3D />
      
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Welcome Back</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-white placeholder-gray-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-white placeholder-gray-500"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-700 bg-black/30 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Remember me
                  </label>
                </div>

                <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-indigo-400 hover:text-indigo-300">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}