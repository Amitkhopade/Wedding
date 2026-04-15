import { useState } from 'react';
import { useRouter } from 'next/router';
import { validateCredentials, generateToken, setAuthToken } from '../utils/auth';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = validateCredentials(email, password);

      if (result.success) {
        const token = generateToken(result.email, result.role);
        setAuthToken(token);
        login({ email: result.email, role: result.role });

        // Redirect based on role
        if (result.role === 'admin') {
          router.push('/admin/dashboard');
        } else {
          router.push('/gallery');
        }
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoAdmin = () => {
    setEmail('admin@shaadi.com');
    setPassword('Admin@123');
  };

  const fillDemoUser = () => {
    setEmail('user@shaadi.com');
    setPassword('User@123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-900 to-maroon-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-maroon-900 mb-2">
              Shaadi Invitations
            </h1>
            <p className="text-gray-600">Admin & User Portal</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-maroon-600 hover:bg-maroon-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 border-t pt-6">
            <p className="text-sm text-gray-600 text-center mb-4">Demo Credentials:</p>
            <div className="space-y-2">
              <button
                type="button"
                onClick={fillDemoAdmin}
                className="w-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 py-2 rounded-lg text-sm font-medium transition"
              >
                Admin Demo
              </button>
              <button
                type="button"
                onClick={fillDemoUser}
                className="w-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 py-2 rounded-lg text-sm font-medium transition"
              >
                User Demo
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-3">
              Admin: admin@shaadi.com / Admin@123<br/>
              User: user@shaadi.com / User@123
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <a href="/" className="text-maroon-600 hover:text-maroon-700 text-sm font-medium">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
