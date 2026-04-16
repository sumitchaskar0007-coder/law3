import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { careerAPI } from '../../api';
import { useAuth } from '../../context/AuthContext';

const CareerAdmin = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingCareer, setEditingCareer] = useState(null);
  const [formData, setFormData] = useState({
    position: '',
    department: '',
    location: '',
    description: '',
    requirements: [''],
    responsibilities: [''],
    isActive: true,
    applicationDeadline: '',
    experienceRequired: '',
    salaryRange: { min: '', max: '' }
  });
  
  const { admin } = useAuth();

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await careerAPI.getAllAdmin();
      console.log('Careers fetched:', response.data);
      setCareers(response.data.data || []);
    } catch (error) {
      console.error('Error fetching careers:', error);
      setError('Failed to load careers. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('salaryRange.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        salaryRange: {
          ...prev.salaryRange,
          [field]: value === '' ? '' : Number(value)
        }
      }));
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayItem = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const removeArrayItem = (field, index) => {
    if (formData[field].length <= 1) {
      // Keep at least one empty field
      setFormData({ ...formData, [field]: [''] });
    } else {
      const newArray = formData[field].filter((_, i) => i !== index);
      setFormData({ ...formData, [field]: newArray });
    }
  };

  const validateForm = () => {
    const requiredFields = ['position', 'department', 'location', 'description', 'applicationDeadline'];
    
    for (const field of requiredFields) {
      if (!formData[field] || formData[field].toString().trim() === '') {
        setError(`${field} is required`);
        return false;
      }
    }

    // Validate requirements and responsibilities
    const validRequirements = formData.requirements.filter(req => req.trim() !== '');
    const validResponsibilities = formData.responsibilities.filter(res => res.trim() !== '');
    
    if (validRequirements.length === 0) {
      setError('At least one requirement is required');
      return false;
    }
    
    if (validResponsibilities.length === 0) {
      setError('At least one responsibility is required');
      return false;
    }

    // Validate date
    const deadline = new Date(formData.applicationDeadline);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (deadline < today) {
      setError('Application deadline must be in the future');
      return false;
    }

    // Validate salary range
    if (formData.salaryRange.min && formData.salaryRange.max) {
      if (Number(formData.salaryRange.min) > Number(formData.salaryRange.max)) {
        setError('Minimum salary cannot be greater than maximum salary');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    try {
      // Prepare data
      const dataToSend = {
        ...formData,
        requirements: formData.requirements.filter(req => req.trim() !== ''),
        responsibilities: formData.responsibilities.filter(res => res.trim() !== ''),
        applicationDeadline: formData.applicationDeadline,
        salaryRange: {
          min: formData.salaryRange.min || undefined,
          max: formData.salaryRange.max || undefined
        }
      };

      console.log('Submitting career data:', dataToSend);

      if (editingCareer) {
        await careerAPI.update(editingCareer._id, dataToSend);
      } else {
        await careerAPI.create(dataToSend);
      }
      
      setShowModal(false);
      resetForm();
      fetchCareers();
      
      // Show success message
      alert(`Career ${editingCareer ? 'updated' : 'created'} successfully!`);
    } catch (error) {
      console.error('Error saving career:', error);
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          'Failed to save career';
      setError(errorMessage);
    }
  };

  const handleEdit = (career) => {
    console.log('Editing career:', career);
    setEditingCareer(career);
    setFormData({
      position: career.position || '',
      department: career.department || '',
      location: career.location || '',
      description: career.description || '',
      requirements: career.requirements && career.requirements.length > 0 
        ? [...career.requirements] 
        : [''],
      responsibilities: career.responsibilities && career.responsibilities.length > 0 
        ? [...career.responsibilities] 
        : [''],
      isActive: career.isActive !== undefined ? career.isActive : true,
      applicationDeadline: career.applicationDeadline 
        ? new Date(career.applicationDeadline).toISOString().split('T')[0]
        : '',
      experienceRequired: career.experienceRequired || '',
      salaryRange: career.salaryRange || { min: '', max: '' }
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this career?')) {
      return;
    }

    try {
      await careerAPI.delete(id);
      fetchCareers();
      alert('Career deleted successfully!');
    } catch (error) {
      console.error('Error deleting career:', error);
      alert('Failed to delete career. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      position: '',
      department: '',
      location: '',
      description: '',
      requirements: [''],
      responsibilities: [''],
      isActive: true,
      applicationDeadline: '',
      experienceRequired: '',
      salaryRange: { min: '', max: '' }
    });
    setEditingCareer(null);
    setError('');
  };

  const handleDebug = async () => {
    try {
      const response = await careerAPI.debugAll();
      console.log('Debug data:', response.data);
      alert(`Check console for debug info.\nAll: ${response.data.allCareersCount}\nActive: ${response.data.activeCareersCount}\nFuture: ${response.data.futureCareersCount}`);
    } catch (error) {
      console.error('Debug error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading careers...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Career Management</h1>
            <Link to="/admin/dashboard" className="text-blue-600 hover:text-blue-800">
              ← Back to Dashboard
            </Link>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleDebug}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Debug
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add New Career
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {error && !showModal && (
          <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">Total Careers</h3>
            <p className="text-3xl">{careers.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">Active Careers</h3>
            <p className="text-3xl">{careers.filter(c => c.isActive).length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">Expired Careers</h3>
            <p className="text-3xl">
              {careers.filter(c => c.isActive && new Date(c.applicationDeadline) < new Date()).length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">Inactive Careers</h3>
            <p className="text-3xl">{careers.filter(c => !c.isActive).length}</p>
          </div>
        </div>

        {/* Careers Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {careers.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                      No careers found. Create your first career!
                    </td>
                  </tr>
                ) : (
                  careers.map((career) => (
                    <tr key={career._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{career.position}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{career.department}</td>
                      <td className="px-6 py-4 text-gray-700">{career.location}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          career.isActive 
                            ? new Date(career.applicationDeadline) >= new Date()
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {career.isActive 
                            ? new Date(career.applicationDeadline) >= new Date()
                              ? 'Active'
                              : 'Expired'
                            : 'Inactive'
                          }
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {new Date(career.applicationDeadline).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(career)}
                            className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(career._id)}
                            className="text-red-600 hover:text-red-900 text-sm font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {editingCareer ? 'Edit Career' : 'Add New Career'}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {error && (
              <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Position Title *
                    </label>
                    <input
                      type="text"
                      name="position"
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="e.g., Senior Developer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Department *
                    </label>
                    <input
                      type="text"
                      name="department"
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.department}
                      onChange={handleInputChange}
                      placeholder="e.g., Engineering"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., New York, NY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Experience Required
                    </label>
                    <input
                      type="text"
                      name="experienceRequired"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.experienceRequired}
                      onChange={handleInputChange}
                      placeholder="e.g., 2-3 years"
                    />
                  </div>
                </div>

                {/* Salary Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salary Range (Optional)
                  </label>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <input
                        type="number"
                        name="salaryRange.min"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.salaryRange.min}
                        onChange={handleInputChange}
                        placeholder="Minimum"
                        min="0"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="number"
                        name="salaryRange.max"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.salaryRange.max}
                        onChange={handleInputChange}
                        placeholder="Maximum"
                        min="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Application Deadline */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Application Deadline *
                  </label>
                  <input
                    type="date"
                    name="applicationDeadline"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.applicationDeadline}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Description *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows="4"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe the job responsibilities and expectations..."
                  />
                </div>

                {/* Requirements */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Requirements *
                    </label>
                    <button
                      type="button"
                      onClick={() => addArrayItem('requirements')}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Requirement
                    </button>
                  </div>
                  {formData.requirements.map((req, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={req}
                        onChange={(e) => handleArrayChange('requirements', index, e.target.value)}
                        placeholder={`Requirement ${index + 1}`}
                        required={index === 0}
                      />
                      {formData.requirements.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('requirements', index)}
                          className="ml-2 text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Responsibilities */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Responsibilities *
                    </label>
                    <button
                      type="button"
                      onClick={() => addArrayItem('responsibilities')}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Responsibility
                    </button>
                  </div>
                  {formData.responsibilities.map((res, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={res}
                        onChange={(e) => handleArrayChange('responsibilities', index, e.target.value)}
                        placeholder={`Responsibility ${index + 1}`}
                        required={index === 0}
                      />
                      {formData.responsibilities.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('responsibilities', index)}
                          className="ml-2 text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Active Status */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isActive"
                    id="isActive"
                    className="h-4 w-4 text-blue-600 rounded"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="isActive" className="ml-2 text-sm text-gray-700">
                    Active (Visible on public careers page)
                  </label>
                </div>
              </div>

              {/* Form Actions */}
              <div className="mt-8 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {editingCareer ? 'Update Career' : 'Create Career'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerAdmin;