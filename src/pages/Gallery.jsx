import React, { useState, useEffect } from 'react';
import { galleryAPI } from '../api';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await galleryAPI.getAll();

      // IMPORTANT: backend returns Cloudinary URLs in `image`
      setItems(response.data.data || []);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    } finally {
      setLoading(false);
    }
  };

  // Extract unique categories
  const categories = [
    'all',
    ...new Set(items.map((item) => item.category).filter(Boolean)),
  ];

  // Filter items by category
  const filteredItems =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading gallery...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center">Our Gallery</h1>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* CATEGORY FILTER */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>

        {/* GALLERY GRID */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No images found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                {/* ✅ CLOUDINARY IMAGE */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-500">
                    No Image
                  </div>
                )}

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">
                    {item.title}
                  </h3>

                  {item.category && (
                    <span className="inline-block bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                      {item.category}
                    </span>
                  )}

                  {item.description && (
                    <p className="mt-2 text-gray-600 text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Gallery;
