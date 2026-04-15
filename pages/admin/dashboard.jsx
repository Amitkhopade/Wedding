import { useState, useEffect } from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import designs from '../../data/designsLibrary';
import { Package, Users, TrendingUp, CurrencyDollar } from 'phosphor-react';

function AdminDashboardContent() {
  const [stats, setStats] = useState({
    totalDesigns: 0,
    totalValue: 0,
    premiumCount: 0,
    traditionalCount: 0,
  });

  useEffect(() => {
    // Calculate statistics
    const totalValue = designs.reduce((sum, design) => sum + design.price, 0);
    const premiumCount = designs.filter(d => d.budget === 'Premium').length;
    const traditionalCount = designs.filter(d => d.category === 'Traditional').length;

    setStats({
      totalDesigns: designs.length,
      totalValue,
      premiumCount,
      traditionalCount,
    });
  }, []);

  return (
    <div className="ml-64 min-h-screen bg-gray-50">
      <AdminSidebar />

      {/* Main Content */}
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to Shaadi Invitations Admin Panel</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Designs */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Designs</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalDesigns}</p>
              </div>
              <Package size={40} className="text-blue-500 opacity-20" />
            </div>
          </div>

          {/* Total Value */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-emerald-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Value</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">₹{stats.totalValue}</p>
              </div>
              <CurrencyDollar size={40} className="text-emerald-500 opacity-20" />
            </div>
          </div>

          {/* Premium Designs */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Premium Designs</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.premiumCount}</p>
              </div>
              <TrendingUp size={40} className="text-purple-500 opacity-20" />
            </div>
          </div>

          {/* Traditional */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-maroon-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Traditional</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.traditionalCount}</p>
              </div>
              <Users size={40} className="text-maroon-600 opacity-20" />
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Design Categories */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Design Distribution</h2>
            <div className="space-y-3">
              {['Traditional', 'Premium', 'Modern', 'Vintage', 'Floral'].map((category) => {
                const count = designs.filter(d => d.category === category).length;
                const percentage = ((count / designs.length) * 100).toFixed(1);
                return (
                  <div key={category}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{category}</span>
                      <span className="font-semibold text-gray-900">{count}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-maroon-600 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h2>
            <div className="space-y-3">
              {[
                { range: 'Budget (₹150-180)', min: 150, max: 180 },
                { range: 'Mid Range (₹190-230)', min: 190, max: 230 },
                { range: 'Premium (₹240-290)', min: 240, max: 290 },
              ].map((item) => {
                const count = designs.filter(
                  d => d.price >= item.min && d.price <= item.max
                ).length;
                const percentage = ((count / designs.length) * 100).toFixed(1);
                return (
                  <div key={item.range}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{item.range}</span>
                      <span className="font-semibold text-gray-900">{count}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-600 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/admin/designs"
              className="p-4 border-2 border-maroon-200 rounded-lg hover:border-maroon-400 hover:bg-maroon-50 transition text-center"
            >
              <p className="font-semibold text-gray-900">Manage All Designs</p>
              <p className="text-sm text-gray-600 mt-1">Edit prices and details</p>
            </a>
            <a
              href="/gallery"
              className="p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition text-center"
            >
              <p className="font-semibold text-gray-900">View Gallery</p>
              <p className="text-sm text-gray-600 mt-1">See public gallery</p>
            </a>
            <a
              href="/"
              className="p-4 border-2 border-emerald-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition text-center"
            >
              <p className="font-semibold text-gray-900">Back to Home</p>
              <p className="text-sm text-gray-600 mt-1">Visit homepage</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <ProtectedRoute requiredRole="admin">
      <AdminDashboardContent />
    </ProtectedRoute>
  );
}
