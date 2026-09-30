import React, { useEffect, useMemo, useState } from 'react';
import { meritListAPI, getMediaUrl } from '../api';

const toInlinePdfUrl = async (pdfUrl) => {
  if (!pdfUrl) return '';

  try {
    const response = await fetch(pdfUrl, { mode: 'cors' });
    if (!response.ok) return getMediaUrl(pdfUrl);

    const blob = await response.blob();
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    return URL.createObjectURL(pdfBlob);
  } catch (error) {
    console.error('Error loading PDF preview:', error);
    return getMediaUrl(pdfUrl);
  }
};

const MeritList = () => {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [loading, setLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    const fetchMeritLists = async () => {
      try {
        const response = await meritListAPI.getAll();
        const data = response?.data?.data || [];
        setItems(data);
        if (data.length > 0) setSelectedId(data[0]._id);
      } catch (error) {
        console.error('Error fetching merit lists:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeritLists();
  }, []);

  const selectedItem = useMemo(
    () => items.find((item) => item._id === selectedId) || items[0],
    [items, selectedId]
  );

  useEffect(() => {
    let cancelled = false;
    let objectUrl = '';

    const loadPreview = async () => {
      if (!selectedItem?.pdfUrl) {
        setPreviewUrl('');
        return;
      }

      const nextUrl = await toInlinePdfUrl(selectedItem.pdfUrl);
      if (!cancelled) {
        objectUrl = nextUrl.startsWith('blob:') ? nextUrl : '';
        setPreviewUrl(nextUrl);
      }
    };

    loadPreview();

    return () => {
      cancelled = true;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [selectedItem?.pdfUrl]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg text-gray-700">Loading merit lists...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Academic Updates</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-blue-950">Merit List</h1>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-dashed border-gray-300 p-10 text-center text-gray-600">
          No merit list has been uploaded yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.9fr] gap-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="border-b border-gray-200 p-4 bg-gray-50">
              <h2 className="text-xl font-bold text-blue-950">{selectedItem?.title || 'Merit List'}</h2>
              {selectedItem?.description && (
                <p className="mt-2 text-sm text-gray-600">{selectedItem.description}</p>
              )}
            </div>

            <div className="h-[75vh] min-h-[500px] bg-gray-100">
              {selectedItem?.pdfUrl ? (
                <iframe
                  src={previewUrl || getMediaUrl(selectedItem.pdfUrl)}
                  title={selectedItem.title}
                  className="w-full h-full"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-500">PDF not available</div>
              )}
            </div>
          </div>

          <aside className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
            <h3 className="mb-4 text-lg font-bold text-blue-950">Available Lists</h3>
            <div className="space-y-3">
              {items.map((item) => (
                <button
                  key={item._id}
                  type="button"
                  onClick={() => setSelectedId(item._id)}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    selectedItem?._id === item._id
                      ? 'border-blue-600 bg-blue-50 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50'
                  }`}
                >
                  <div className="font-semibold text-gray-900">{item.title}</div>
                  <div className="mt-1 text-xs text-gray-500">{item.pdfName || 'PDF document'}</div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default MeritList;
