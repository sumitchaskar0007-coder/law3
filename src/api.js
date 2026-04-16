import axios from 'axios';

/*
|--------------------------------------------------------------------------
| API BASE URL (FROM .ENV)
|--------------------------------------------------------------------------
| - Uses VITE_API_BASE_URL from environment
| - Falls back to default if not set
|--------------------------------------------------------------------------
*/

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://api.jadhavarcollegeoflaw.com/api';

// Create axios instance
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

/*
|--------------------------------------------------------------------------
| REQUEST INTERCEPTOR – ADD JWT TOKEN
|--------------------------------------------------------------------------
*/
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/*
|--------------------------------------------------------------------------
| RESPONSE INTERCEPTOR – ERROR HANDLING
|--------------------------------------------------------------------------
*/
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Network error
    if (!error.response) {
      console.error('Network error:', error.message);
      alert('Network error. Please check your internet connection.');
      return Promise.reject(error);
    }

    // Unauthorized
    if (error.response.status === 401) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminInfo');
      window.location.href = '/admin/login';
    }

    const errorMessage =
      error.response?.data?.error ||
      error.response?.data?.message ||
      'An unexpected error occurred';

    console.error('API Error:', {
      status: error.response.status,
      message: errorMessage,
      url: error.config.url,
    });

    return Promise.reject(error);
  }
);

/*
|--------------------------------------------------------------------------
| ADMIN API
|--------------------------------------------------------------------------
*/
export const adminAPI = {
  login: (credentials) => API.post('/admin/login', credentials),
  getProfile: () => API.get('/admin/profile'),
  createAdmin: (data) => API.post('/admin/create', data),
};

/*
|--------------------------------------------------------------------------
| GALLERY API
|--------------------------------------------------------------------------
*/
export const galleryAPI = {
  getAll: () => API.get('/gallery'),
  getById: (id) => API.get(`/gallery/${id}`),

  create: (formData) =>
    API.post('/gallery', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  update: (id, formData) =>
    API.put(`/gallery/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  delete: (id) => API.delete(`/gallery/${id}`),

  getAllAdmin: () => API.get('/gallery/admin/all'),
};

/*
|--------------------------------------------------------------------------
| ADMISSION API
|--------------------------------------------------------------------------
*/
export const admissionAPI = {
  submit: (formData) => API.post('/admission/submit', formData),
  getAll: () => API.get('/admission/all'),
  getById: (id) => API.get(`/admission/${id}`),
  getExcelData: () => API.get('/admission/excel-data'),
  downloadExcel: () =>
    API.get('/admission/download-excel', { responseType: 'blob' }),
};

/*
|--------------------------------------------------------------------------
| ANNOUNCEMENT API
|--------------------------------------------------------------------------
*/
export const announcementAPI = {
  getAll: () => API.get('/announcements'),
  getById: (id) => API.get(`/announcements/${id}`),
  create: (data) => API.post('/announcements', data),
  update: (id, data) => API.put(`/announcements/${id}`, data),
  delete: (id) => API.delete(`/announcements/${id}`),
  getAllAdmin: () => API.get('/announcements/admin/all'),
};

/*
|--------------------------------------------------------------------------
| CAREER API
|--------------------------------------------------------------------------
*/
export const careerAPI = {
  getAll: () => API.get('/careers'),
  getById: (id) => API.get(`/careers/${id}`),

  create: (data) => {
    const formattedData = {
      ...data,
      requirements: Array.isArray(data.requirements)
        ? data.requirements
        : data.requirements
        ? [data.requirements]
        : [],
      responsibilities: Array.isArray(data.responsibilities)
        ? data.responsibilities
        : data.responsibilities
        ? [data.responsibilities]
        : [],
      applicationDeadline: new Date(data.applicationDeadline).toISOString(),
    };
    return API.post('/careers', formattedData);
  },

  update: (id, data) => {
    const formattedData = {
      ...data,
      requirements: Array.isArray(data.requirements)
        ? data.requirements
        : data.requirements
        ? [data.requirements]
        : [],
      responsibilities: Array.isArray(data.responsibilities)
        ? data.responsibilities
        : data.responsibilities
        ? [data.responsibilities]
        : [],
      applicationDeadline: new Date(data.applicationDeadline).toISOString(),
    };
    return API.put(`/careers/${id}`, formattedData);
  },

  delete: (id) => API.delete(`/careers/${id}`),

  getAllAdmin: () => API.get('/careers/admin/all'),
};

/*
|--------------------------------------------------------------------------
| BLOG API
|--------------------------------------------------------------------------
*/
export const blogAPI = {
  getAll: () => API.get('/blogs'),
  getById: (id) => API.get(`/blogs/${id}`),

  create: (formData) =>
    API.post('/blogs', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  update: (id, formData) =>
    API.put(`/blogs/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  remove: (id) => API.delete(`/blogs/admin/${id}`),

  getAllAdmin: () => API.get('/blogs/admin/all'),
};

/*
|--------------------------------------------------------------------------
| HEALTH CHECK
|--------------------------------------------------------------------------
*/
export const checkAPIHealth = () => API.get('/test');

export default API;