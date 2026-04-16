import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { admissionAPI } from '../../api';
import * as XLSX from 'xlsx';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { admin, logout } = useAuth();
  
  // Admission management state
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [viewModal, setViewModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' or 'admissions'

  useEffect(() => {
    if (activeTab === 'admissions') {
      fetchAdmissions();
    }
  }, [activeTab]);

  const fetchAdmissions = async () => {
    try {
      setLoading(true);
      const response = await admissionAPI.getAll();
      setAdmissions(response.data.data || []);
      setError('');
    } catch (err) {
      setError('Failed to fetch admissions');
      console.error('Error fetching admissions:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadExcel = async () => {
    try {
      const response = await admissionAPI.downloadExcel();
      
      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `admissions_${new Date().toISOString().split('T')[0]}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error downloading Excel:', err);
      alert('Failed to download Excel file');
    }
  };

  const handleExportToExcel = () => {
    try {
      const exportData = admissions.map(admission => ({
        'Application Date': new Date(admission.submittedAt).toLocaleDateString(),
        'Name': `${admission.firstName || ''} ${admission.surname || ''}`.trim(),
        "Father's Name": admission.fathersName || '',
        'Course': admission.courseApplied || '',
        'Medium': admission.medium || '',
        'Email': admission.email || '',
        'Contact': admission.studentContact || '',
        'Date of Birth': admission.dateOfBirth ? new Date(admission.dateOfBirth).toLocaleDateString() : '',
        'Gender': admission.sex || '',
        'Category': admission.category || '',
        'Address': admission.presentAddress || '',
        'City/Pincode': admission.presentPincode || ''
      }));

      const ws = XLSX.utils.json_to_sheet(exportData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Admissions');
      
      XLSX.writeFile(wb, `admissions_export_${new Date().toISOString().split('T')[0]}.xlsx`);
    } catch (err) {
      console.error('Error exporting to Excel:', err);
      alert('Failed to export data');
    }
  };

  const handleViewDetails = (admission) => {
    setSelectedAdmission(admission);
    setViewModal(true);
  };

  const handleCloseModal = () => {
    setViewModal(false);
    setSelectedAdmission(null);
  };

  const handleLogout = () => {
    logout();
  };

  // Filter admissions based on search
  const filteredAdmissions = admissions.filter(admission => {
    const searchString = searchTerm.toLowerCase();
    return (
      (admission.firstName?.toLowerCase().includes(searchString)) ||
      (admission.surname?.toLowerCase().includes(searchString)) ||
      (admission.email?.toLowerCase().includes(searchString)) ||
      (admission.studentContact?.includes(searchString)) ||
      (admission.courseApplied?.toLowerCase().includes(searchString))
    );
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAdmissions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAdmissions.length / itemsPerPage);

  // Calculate stats
  const totalAdmissions = admissions.length;
  const recentAdmissions = admissions.filter(a => {
    const date = new Date(a.submittedAt);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return date >= weekAgo;
  }).length;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span>Welcome, {admin?.username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`${
                activeTab === 'overview'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('admissions')}
              className={`${
                activeTab === 'admissions'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Admissions Management
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' ? (
          /* Overview Tab Content */
          <>
            {/* MANAGEMENT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Gallery */}
              <Link
                to="/admin/gallery"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h2 className="text-xl font-bold mb-4">Gallery Management</h2>
                <p className="text-gray-600">Manage gallery images and categories</p>
              </Link>

              {/* Announcements */}
              <Link
                to="/admin/announcements"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h2 className="text-xl font-bold mb-4">Announcements</h2>
                <p className="text-gray-600">Create and manage announcements</p>
              </Link>

              {/* Careers */}
              <Link
                to="/admin/careers"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h2 className="text-xl font-bold mb-4">Careers</h2>
                <p className="text-gray-600">Manage job openings and applications</p>
              </Link>

              {/* Blog Management */}
              <Link
                to="/admin/blogs"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-2 border-blue-500"
              >
                <h2 className="text-xl font-bold mb-4">Blog Management</h2>
                <p className="text-gray-600">Create, edit and publish blog posts</p>
              </Link>
            </div>

            {/* QUICK STATS */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Quick Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="p-4 border rounded">
                  <h3 className="font-bold text-gray-600">Total Gallery Items</h3>
                  <p className="text-3xl font-bold">--</p>
                </div>
                <div className="p-4 border rounded">
                  <h3 className="font-bold text-gray-600">Active Announcements</h3>
                  <p className="text-3xl font-bold">--</p>
                </div>
                <div className="p-4 border rounded">
                  <h3 className="font-bold text-gray-600">Open Positions</h3>
                  <p className="text-3xl font-bold">--</p>
                </div>
                <div className="p-4 border rounded">
                  <h3 className="font-bold text-gray-600">Total Blogs</h3>
                  <p className="text-3xl font-bold">--</p>
                </div>
                <div className="p-4 border rounded bg-indigo-50">
                  <h3 className="font-bold text-indigo-600">Total Admissions</h3>
                  <p className="text-3xl font-bold text-indigo-700">{totalAdmissions}</p>
                </div>
              </div>
            </div>

            {/* Recent Admissions Preview */}
            {totalAdmissions > 0 && (
              <div className="mt-8 bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Recent Admissions</h2>
                  <button
                    onClick={() => setActiveTab('admissions')}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    View All →
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {admissions.slice(0, 5).map((admission, index) => (
                        <tr key={admission._id || index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(admission.submittedAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {`${admission.firstName || ''} ${admission.surname || ''}`.trim()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {admission.courseApplied || '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {admission.studentContact || '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Admissions Management Tab Content */
          <div className="admin-dashboard">
            <div className="dashboard-header">
              <h1>Admission Applications Dashboard</h1>
              <div className="header-actions">
                <button 
                  className="btn btn-primary"
                  onClick={handleDownloadExcel}
                >
                  <i className="fas fa-download"></i> Download Excel
                </button>
                <button 
                  className="btn btn-success"
                  onClick={handleExportToExcel}
                >
                  <i className="fas fa-file-excel"></i> Export to Excel
                </button>
                <button 
                  className="btn btn-refresh"
                  onClick={fetchAdmissions}
                >
                  <i className="fas fa-sync-alt"></i> Refresh
                </button>
              </div>
            </div>

            {error && (
              <div className="alert alert-error">
                {error}
              </div>
            )}

            <div className="dashboard-filters">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search by name, email, course, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <i className="fas fa-search search-icon"></i>
              </div>
              <div className="stats">
                <span>Total Applications: <strong>{admissions.length}</strong></span>
                <span>Filtered: <strong>{filteredAdmissions.length}</strong></span>
              </div>
            </div>

            {loading ? (
              <div className="admin-loading">
                <div className="spinner"></div>
                <p>Loading admissions...</p>
              </div>
            ) : (
              <>
                <div className="table-container">
                  <table className="admissions-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Application Date</th>
                        <th>Name</th>
                        <th>Father's Name</th>
                        <th>Course</th>
                        <th>Medium</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Category</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.length > 0 ? (
                        currentItems.map((admission, index) => (
                          <tr key={admission._id || index}>
                            <td>{indexOfFirstItem + index + 1}</td>
                            <td>{new Date(admission.submittedAt).toLocaleDateString()}</td>
                            <td>{`${admission.firstName || ''} ${admission.surname || ''}`.trim()}</td>
                            <td>{admission.fathersName || '-'}</td>
                            <td>{admission.courseApplied || '-'}</td>
                            <td>
                              <span className={`badge badge-${admission.medium?.toLowerCase() || 'default'}`}>
                                {admission.medium || '-'}
                              </span>
                            </td>
                            <td>{admission.email || '-'}</td>
                            <td>{admission.studentContact || '-'}</td>
                            <td>
                              <span className={`badge badge-${admission.category?.toLowerCase() || 'default'}`}>
                                {admission.category || 'Open'}
                              </span>
                            </td>
                            <td>
                              <button 
                                className="btn-action view"
                                onClick={() => handleViewDetails(admission)}
                                title="View Details"
                              >
                                <i className="fas fa-eye"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="10" className="no-data">
                            No admission applications found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="pagination">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="page-btn"
                    >
                      Previous
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="page-btn"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}

            {/* View Details Modal */}
            {viewModal && selectedAdmission && (
              <div className="modal-overlay" onClick={handleCloseModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                  <div className="modal-header">
                    <h2>Application Details</h2>
                    <button className="close-btn" onClick={handleCloseModal}>×</button>
                  </div>
                  
                  <div className="modal-body">
                    <div className="details-section">
                      <h3>Personal Information</h3>
                      <div className="details-grid">
                        <div className="detail-item">
                          <label>Name:</label>
                          <span>{`${selectedAdmission.firstName || ''} ${selectedAdmission.surname || ''}`.trim()}</span>
                        </div>
                        <div className="detail-item">
                          <label>Father's Name:</label>
                          <span>{selectedAdmission.fathersName || '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Mother's Name:</label>
                          <span>{selectedAdmission.mothersName || '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Date of Birth:</label>
                          <span>{selectedAdmission.dateOfBirth ? new Date(selectedAdmission.dateOfBirth).toLocaleDateString() : '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Gender:</label>
                          <span>{selectedAdmission.sex || '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Blood Group:</label>
                          <span>{selectedAdmission.bloodGroup || '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Marital Status:</label>
                          <span>{selectedAdmission.maritalStatus || '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Nationality:</label>
                          <span>{selectedAdmission.nationality || '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Religion:</label>
                          <span>{selectedAdmission.religion || '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Aadhar Card:</label>
                          <span>{selectedAdmission.aadharCardNo || '-'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="details-section">
                      <h3>Contact Information</h3>
                      <div className="details-grid">
                        <div className="detail-item">
                          <label>Email:</label>
                          <span>{selectedAdmission.email || '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Contact Number:</label>
                          <span>{selectedAdmission.studentContact || '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Alternate Phone:</label>
                          <span>{selectedAdmission.phone1 || '-'}</span>
                        </div>
                        <div className="detail-item full-width">
                          <label>Present Address:</label>
                          <span>{selectedAdmission.presentAddress || '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Pincode:</label>
                          <span>{selectedAdmission.presentPincode || '-'}</span>
                        </div>
                        <div className="detail-item full-width">
                          <label>Permanent Address:</label>
                          <span>{selectedAdmission.permanentAddress || '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Pincode:</label>
                          <span>{selectedAdmission.permanentPincode || '-'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="details-section">
                      <h3>Academic Information</h3>
                      <div className="details-grid">
                        <div className="detail-item full-width">
                          <label>Course Applied:</label>
                          <span>{selectedAdmission.courseApplied || '-'}</span>
                        </div>
                        <div className="detail-item">
                          <label>Medium:</label>
                          <span>{selectedAdmission.medium || '-'}</span>
                        </div>
                        <div className="detail-item full-width">
                          <label>Subjects Offered:</label>
                          <span>{selectedAdmission.subjectsOffered || '-'}</span>
                        </div>
                        <div className="detail-item full-width">
                          <label>Last College:</label>
                          <span>{selectedAdmission.lastCollegeName || '-'}</span>
                        </div>
                      </div>

                      {selectedAdmission.academicRecords && selectedAdmission.academicRecords.length > 0 && (
                        <div className="academic-records">
                          <h4>Academic Records</h4>
                          <table className="records-table">
                            <thead>
                              <tr>
                                <th>Examination</th>
                                <th>Board/University</th>
                                <th>Year</th>
                                <th>Percentage</th>
                              </tr>
                            </thead>
                            <tbody>
                              {selectedAdmission.academicRecords.map((record, idx) => (
                                record.examination && (
                                  <tr key={idx}>
                                    <td>{record.examination}</td>
                                    <td>{record.boardUniversity}</td>
                                    <td>{record.yearOfPassing}</td>
                                    <td>{record.percentage}%</td>
                                  </tr>
                                )
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>

                    <div className="details-section">
                      <h3>Documents Submitted</h3>
                      <div className="documents-grid">
                        {selectedAdmission.documentsSubmitted && Object.entries(selectedAdmission.documentsSubmitted).map(([key, value]) => (
                          <div key={key} className="document-item">
                            <span className={`doc-status ${value ? 'submitted' : 'pending'}`}>
                              {value ? '✓' : '○'}
                            </span>
                            <span className="doc-name">
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="details-section">
                      <h3>Application Meta</h3>
                      <div className="details-grid">
                        <div className="detail-item">
                          <label>Submitted On:</label>
                          <span>{new Date(selectedAdmission.submittedAt).toLocaleString()}</span>
                        </div>
                        <div className="detail-item">
                          <label>IP Address:</label>
                          <span>{selectedAdmission.ipAddress || '-'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;