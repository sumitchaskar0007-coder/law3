import React, { useEffect, useState } from 'react';
import { blogAPI } from '../../api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RichTextEditor from '../../components/RichTextEditor';

export default function BlogAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    status: 'published',
    coverImage: null,
    currentImageUrl: '',
    metaTitle: '',
    metaDescription: '',
    slug: '',
  });

  /* ================= LOAD BLOGS ================= */
  const loadBlogs = async () => {
    try {
      setLoading(true);
      const res = await blogAPI.getAllAdmin();
      setBlogs(res.data);
      toast.success('Blogs loaded successfully');
    } catch (err) {
      console.error('Load blogs failed', err);
      toast.error('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  /* ================= GENERATE SLUG FROM TITLE ================= */
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  /* ================= HANDLE FORM CHANGE ================= */
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Auto-generate slug from title
    if (name === 'title') {
      setForm((prev) => ({
        ...prev,
        slug: generateSlug(value),
      }));
    }
  };

  const handleContentChange = (value) => {
    setForm((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({
      ...prev,
      coverImage: e.target.files[0],
    }));
  };

  /* ================= CREATE / UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('excerpt', form.excerpt);
    formData.append('content', form.content);
    formData.append('status', form.status);
    formData.append('metaTitle', form.metaTitle || form.title);
    formData.append('metaDescription', form.metaDescription || form.excerpt);
    formData.append('slug', form.slug || generateSlug(form.title));
    
    if (form.coverImage) {
      formData.append('coverImage', form.coverImage);
    }

    try {
      if (editingId) {
        await blogAPI.update(editingId, formData);
        toast.success('Blog updated successfully');
      } else {
        await blogAPI.create(formData);
        toast.success('Blog created successfully');
      }

      resetForm();
      loadBlogs();
    } catch (err) {
      console.error('Save failed', err);
      toast.error('Failed to save blog');
    }
  };

  /* ================= EDIT ================= */
  const editBlog = (blog) => {
    setEditingId(blog._id);
    setForm({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      status: blog.status,
      coverImage: null,
      currentImageUrl: blog.coverImage 
        ? `${import.meta.env.VITE_API_URL || 'https://api.jadhavarcollegeoflaw.com'}${blog.coverImage}`
        : '',
      metaTitle: blog.metaTitle || blog.title,
      metaDescription: blog.metaDescription || blog.excerpt,
      slug: blog.slug || generateSlug(blog.title),
    });
    setPreviewMode(false);
  };

  /* ================= DELETE BLOG ================= */
  const deleteBlog = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      await blogAPI.remove(id);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
      toast.success('Blog deleted successfully');
      
      if (editingId === id) {
        resetForm();
      }
    } catch (err) {
      console.error('Delete failed', err);
      toast.error(`Delete failed: ${err.response?.data?.error || err.message}`);
    }
  };

  /* ================= RESET FORM ================= */
  const resetForm = () => {
    setForm({
      title: '',
      excerpt: '',
      content: '',
      status: 'published',
      coverImage: null,
      currentImageUrl: '',
      metaTitle: '',
      metaDescription: '',
      slug: '',
    });
    setEditingId(null);
    setPreviewMode(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Blog Management</h1>

      {/* ================= FORM ================= */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {editingId ? 'Edit Blog' : 'Create New Blog'}
          </h2>
          {editingId && (
            <button
              type="button"
              onClick={() => setPreviewMode(!previewMode)}
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition"
            >
              {previewMode ? 'Edit Mode' : 'Preview Mode'}
            </button>
          )}
        </div>
        
        {!previewMode ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title * (H1 - 40-48px)
              </label>
              <input
                type="text"
                name="title"
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 text-2xl"
                placeholder="Enter blog title"
                value={form.title}
                onChange={handleFormChange}
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL Slug (SEO Friendly)
              </label>
              <input
                type="text"
                name="slug"
                className="border border-gray-300 rounded-lg p-3 w-full bg-gray-50 font-mono text-sm"
                placeholder="ib-vs-cbse-comparison"
                value={form.slug}
                onChange={handleFormChange}
              />
              <p className="text-sm text-gray-500 mt-1">
                URL will be: /blog/{form.slug || 'your-blog-slug'}
              </p>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Excerpt * (Max 300 characters - Used for preview)
              </label>
              <textarea
                name="excerpt"
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500"
                placeholder="Enter short excerpt that appears in blog cards"
                value={form.excerpt}
                onChange={handleFormChange}
                rows="3"
                maxLength="300"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                {form.excerpt.length}/300 characters
              </p>
            </div>

            {/* SEO Meta Tags */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Title (SEO)
                </label>
                <input
                  type="text"
                  name="metaTitle"
                  className="border border-gray-300 rounded-lg p-3 w-full"
                  placeholder="SEO Title"
                  value={form.metaTitle}
                  onChange={handleFormChange}
                  maxLength="60"
                />
                <p className="text-sm text-gray-500 mt-1">
                  {form.metaTitle.length}/60 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Description (SEO)
                </label>
                <textarea
                  name="metaDescription"
                  className="border border-gray-300 rounded-lg p-3 w-full"
                  placeholder="SEO Description"
                  value={form.metaDescription}
                  onChange={handleFormChange}
                  rows="2"
                  maxLength="160"
                />
                <p className="text-sm text-gray-500 mt-1">
                  {form.metaDescription.length}/160 characters
                </p>
              </div>
            </div>

            {/* Status and Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  className="border border-gray-300 rounded-lg p-3 w-full"
                  value={form.status}
                  onChange={handleFormChange}
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
                {form.currentImageUrl && !form.coverImage && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 mb-1">Current Image:</p>
                    <img 
                      src={form.currentImageUrl} 
                      alt="Current cover" 
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Rich Text Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content * (Medium-style editor)
              </label>
              <RichTextEditor
                value={form.content}
                onChange={handleContentChange}
                placeholder="Write your blog content here... Use the toolbar to add headings, images, quotes, lists, and more!"
              />
            </div>

            {/* Form Buttons */}
            <div className="flex space-x-4 pt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                {editingId ? 'Update Blog' : 'Create Blog'}
              </button>
              
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg font-medium transition"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        ) : (
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Preview Mode</h3>
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: form.content }} />
            </div>
          </div>
        )}
      </div>

      {/* ================= BLOG LIST ================= */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">All Blogs</h2>
          <span className="text-sm text-gray-500">
            Total: {blogs.length} blog{blogs.length !== 1 ? 's' : ''}
          </span>
        </div>

        {loading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No blogs found. Create your first blog!
          </div>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div key={blog._id} className="border rounded-lg p-4 hover:bg-gray-50 transition">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      {blog.coverImage && (
                        <img
                          src={`${import.meta.env.VITE_API_URL || 'https://api.jadhavarcollegeoflaw.com'}${blog.coverImage}`}
                          alt={blog.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      )}
                      <div>
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-semibold">{blog.title}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            blog.status === 'published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {blog.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1 line-clamp-2">{blog.excerpt}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-gray-500">
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </span>
                          <span className="text-sm text-gray-500">
                            Slug: /blog/{blog.slug || blog._id}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => editBlog(blog)}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteBlog(blog._id)}
                      className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}