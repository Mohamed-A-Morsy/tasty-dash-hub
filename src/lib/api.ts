import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  register: (userData: any) => api.post('/auth/register', userData),
  login: (credentials: any) => api.post('/auth/login', credentials),
  getUserProfile: () => api.get('/auth/profile'),
  updateUserProfile: (data: any) => api.put('/auth/profile', data),
  changePassword: (data: any) => api.put('/auth/change-password', data),
  deleteAccount: () => api.delete('/auth/account'),
};

// Categories API calls
export const categoriesAPI = {
  addCategory: (data: any) => api.post('/categories', data),
  getCategories: () => api.get('/categories'),
  getCategoryById: (id: string) => api.get(`/categories/${id}`),
  updateCategory: (id: string, data: any) => api.put(`/categories/${id}`, data),
  deleteCategory: (id: string) => api.delete(`/categories/${id}`),
  getFoodItemsByCategory: (id: string) => api.get(`/categories/${id}/food-items`),
};

// Food Items API calls
export const foodItemsAPI = {
  getFoodItems: () => api.get('/food-items'),
  getFoodItemById: (id: string) => api.get(`/food-items/${id}`),
  addFoodItem: (data: any) => api.post('/food-items', data),
  updateFoodItem: (id: string, data: any) => api.put(`/food-items/${id}`, data),
  deleteFoodItem: (id: string) => api.delete(`/food-items/${id}`),
};

// Offers API calls
export const offersAPI = {
  getOffers: () => api.get('/offers'),
  getOfferById: (id: string) => api.get(`/offers/${id}`),
  addOffer: (data: any) => api.post('/offers', data),
  updateOffer: (id: string, data: any) => api.put(`/offers/${id}`, data),
  deleteOffer: (id: string) => api.delete(`/offers/${id}`),
};

// Orders API calls
export const ordersAPI = {
  getOrders: () => api.get('/orders'),
  getOrderById: (id: string) => api.get(`/orders/${id}`),
  createOrder: (data: any) => api.post('/orders', data),
  updateOrder: (id: string, data: any) => api.put(`/orders/${id}`, data),
  deleteOrder: (id: string) => api.delete(`/orders/${id}`),
};

// Favorites API calls
export const favoritesAPI = {
  getFavorites: () => api.get('/favorites'),
  addToFavorites: (data: any) => api.post('/favorites', data),
  removeFromFavorites: (id: string) => api.delete(`/favorites/${id}`),
};

// Cart API calls
export const cartAPI = {
  getCart: () => api.get('/cart'),
  addToCart: (data: any) => api.post('/cart', data),
  updateCartItem: (id: string, data: any) => api.put(`/cart/${id}`, data),
  removeFromCart: (id: string) => api.delete(`/cart/${id}`),
  clearCart: () => api.delete('/cart'),
};

// Options API calls
export const optionsAPI = {
  getOptions: () => api.get('/options'),
  addOption: (data: any) => api.post('/options', data),
  updateOption: (id: string, data: any) => api.put(`/options/${id}`, data),
  deleteOption: (id: string) => api.delete(`/options/${id}`),
};

// Branch API calls
export const branchAPI = {
  getBranches: () => api.get('/branches'),
  getBranchById: (id: string) => api.get(`/branches/${id}`),
  addBranch: (data: any) => api.post('/branches', data),
  updateBranch: (id: string, data: any) => api.put(`/branches/${id}`, data),
  deleteBranch: (id: string) => api.delete(`/branches/${id}`),
};

export default api;