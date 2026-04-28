import React, { useState, useEffect } from 'react';
import { announcementAPI } from '../api';

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await announcementAPI.getAll();
      const fetchedAnnouncements = Array.isArray(response.data?.data)
        ? response.data.data
        : Array.isArray(response.data)
        ? response.data
        : [];
      setAnnouncements(fetchedAnnouncements);
    } catch (error) {
      console.error('Error fetching announcements:', error);
      setAnnouncements([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredAnnouncements = filter === 'all'
    ? announcements
    : announcements.filter((announcement) => announcement.type === filter);

  const getTypeBadgeClass = (type) => {
    switch (type) {
      case 'important':
        return 'bg-red-100 text-red-800';
      case 'event':
        return 'bg-blue-100 text-blue-800';
      case 'general':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (value) => {
    if (!value) return 'N/A';
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? 'N/A' : date.toLocaleDateString();
  };

  if (loading) {
    return <div>Loading announcements...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center">Announcements</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('general')}
            className={`px-4 py-2 rounded ${filter === 'general' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            General
          </button>
          <button
            onClick={() => setFilter('important')}
            className={`px-4 py-2 rounded ${filter === 'important' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Important
          </button>
          <button
            onClick={() => setFilter('event')}
            className={`px-4 py-2 rounded ${filter === 'event' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Events
          </button>
        </div>

        {/* Announcements List */}
        {filteredAnnouncements.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No announcements found.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredAnnouncements.map((announcement) => (
              <div key={announcement._id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">{announcement.title}</h2>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className={`px-2 py-1 rounded text-sm ${getTypeBadgeClass(announcement.type)}`}>
                        {announcement.type}
                      </span>
                      <span className="text-gray-500 text-sm">
                        Posted: {formatDate(announcement.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-line">{announcement.content}</p>
                </div>

                <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <span>
                      Valid from: {formatDate(announcement.startDate)}
                    </span>
                    {announcement.endDate && (
                      <span>
                        Until: {formatDate(announcement.endDate)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Announcement;