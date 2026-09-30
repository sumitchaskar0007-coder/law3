import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { meritListAPI, getMediaUrl } from '../../api';

const toInlinePdfUrl = async (pdfUrl) => {
  if (!pdfUrl) return '';

  try {
    const response = await fetch(pdfUrl, { mode: 'cors' });
    if (!response.ok) return getMediaUrl(pdfUrl);

    const blob = await response.blob();
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    return URL.createObjectURL(pdfBlob);
  } catch (error) {
    console.error('Error preparing preview URL:', error);
    return getMediaUrl(pdfUrl);
  }
};

const MeritListAdmin = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    pdf: null,
  });

  const fetchItems = async () => {
    try {
      const response = await meritListAPI.getAllAdmin();
      setItems(response?.data?.data || []);
    } catch (error) {
      console.error('Error fetching merit lists:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    setFormData((prev) => ({ ...prev, pdf: event.target.files[0] || null }));
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', pdf: null });
    setEditingId('');
    const fileInput = document.getElementById('merit-pdf');
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.title) {
      alert('Please enter a title');
      return;
    }

    if (!editingId && !formData.pdf) {
      alert('Please upload a PDF file');
      return;
    }

    try {
      const payload = new FormData();
      payload.append('title', formData.title);
      payload.append('description', formData.description || '');

      if (formData.pdf) {
        payload.append('pdf', formData.pdf);
      }

      if (editingId) {
        await meritListAPI.update(editingId, payload);
        alert('Merit list updated successfully');
      } else {
        await meritListAPI.create(payload);
        alert('Merit list created successfully');
      }

      resetForm();
      fetchItems();
    } catch (error) {
      console.error('Error saving merit list:', error);
      alert(error?.response?.data?.error || 'Failed to save merit list');
    }
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setFormData({
      title: item.title,
      description: item.description || '',
      pdf: null,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this merit list?')) return;

    try {
      await meritListAPI.delete(id);
      fetchItems();
    } catch (error) {
      console.error('Error deleting merit list:', error);
      alert(error?.response?.data?.error || 'Failed to delete merit list');
    }
  };

  const handleOpenPreview = async (pdfUrl) => {
    const inlineUrl = await toInlinePdfUrl(pdfUrl);
    window.open(inlineUrl, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg text-gray-700">Loading merit lists...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <Link to="/admin/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-3">
              ← Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Merit List Management</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-5">{editingId ? 'Update Merit List' : 'Add Merit List'}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Merit List 2024-25"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Optional description"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">PDF File</label>
              <input
                id="merit-pdf"
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <p className="mt-2 text-xs text-gray-500">Accepted format: PDF only</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 font-medium"
            >
              {editingId ? 'Update Merit List' : 'Add Merit List'}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-200 text-gray-800 px-5 py-3 rounded-lg hover:bg-gray-300 font-medium"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">PDF Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {items.map((item) => (
                  <tr key={item._id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.title}</td>
                    <td className="px-6 py-4 text-gray-600">{item.pdfName || 'PDF document'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleOpenPreview(item.pdfUrl)}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Preview
                        </button>
                        <button
                          type="button"
                          onClick={() => handleEdit(item)}
                          className="text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(item._id)}
                          className="text-red-600 hover:text-red-800 font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {items.length === 0 && (
            <div className="p-8 text-center text-gray-500">No merit lists created yet.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeritListAdmin;
