import { useState, useEffect } from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import designs from '../../data/designsLibrary';
import { Check, X, Edit2, Trash, Upload, MagnifyingGlass } from 'phosphor-react';

function DesignManagementContent() {
  const [designList, setDesignList] = useState(designs);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [editingId, setEditingId] = useState(null);
  const [editedPrice, setEditedPrice] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const categories = ['All', ...new Set(designs.map(d => d.category))];

  const filteredDesigns = designList.filter(design => {
    const matchesSearch = design.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        design.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        design.id.includes(searchTerm);
    const matchesCategory = filterCategory === 'All' || design.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEditPrice = (design) => {
    setEditingId(design.id);
    setEditedPrice(design.price.toString());
  };

  const handleSavePrice = (designId) => {
    setDesignList(designList.map(d => 
      d.id === designId ? { ...d, price: parseInt(editedPrice) } : d
    ));
    setEditingId(null);
    setSuccessMessage('Price updated successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedPrice('');
  };

  const handleDeleteDesign = (designId) => {
    if (confirm('Are you sure you want to delete this design?')) {
      setDesignList(designList.filter(d => d.id !== designId));
      setSuccessMessage('Design deleted successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const handleImageUpload = (designId) => {
    // This would open a file dialog in production
    alert('Image upload feature requires backend implementation');
  };

  return (
    <div className="ml-64 min-h-screen bg-gray-50">
      <AdminSidebar />

      {/* Main Content */}
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Manage Designs</h1>
          <p className="text-gray-600 mt-2">Edit prices and manage your invitation library</p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-700 text-sm flex items-center">
            <Check size={20} className="mr-2" />
            {successMessage}
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, code, or ID..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500"
                />
                <MagnifyingGlass size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-end">
              <div className="w-full px-4 py-2 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{filteredDesigns.length}</span> of <span className="font-semibold text-gray-900">{designList.length}</span> designs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Designs Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Code</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Budget</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredDesigns.map((design) => (
                  <tr key={design.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{design.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{design.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{design.code}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {design.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {editingId === design.id ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            value={editedPrice}
                            onChange={(e) => setEditedPrice(e.target.value)}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                          <button
                            onClick={() => handleSavePrice(design.id)}
                            className="text-emerald-600 hover:text-emerald-700"
                          >
                            <Check size={18} />
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ) : (
                        <span className="text-sm font-semibold text-gray-900">₹{design.price}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        design.budget === 'Premium' ? 'bg-purple-100 text-purple-800' :
                        design.budget === 'Mid' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {design.budget}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleEditPrice(design)}
                          title="Edit Price"
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleImageUpload(design.id)}
                          title="Upload Image"
                          className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
                        >
                          <Upload size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteDesign(design.id)}
                          title="Delete Design"
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        >
                          <Trash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredDesigns.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No designs found matching your filters.</p>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Total Value (Filtered)</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              ₹{filteredDesigns.reduce((sum, d) => sum + d.price, 0)}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Average Price (Filtered)</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              ₹{Math.round(filteredDesigns.reduce((sum, d) => sum + d.price, 0) / filteredDesigns.length) || 0}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Design Count (Filtered)</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{filteredDesigns.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DesignManagement() {
  return (
    <ProtectedRoute requiredRole="admin">
      <DesignManagementContent />
    </ProtectedRoute>
  );
}
