// Authentication utility functions
// For production, use proper database with bcrypt hashing

const ADMIN_CREDENTIALS = {
  email: 'admin@shaadi.com',
  password: 'Admin@123',
  role: 'admin'
};

const USER_CREDENTIALS = {
  email: 'user@shaadi.com',
  password: 'User@123',
  role: 'user'
};

export const validateCredentials = (email, password) => {
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    return { success: true, role: 'admin', email };
  }
  if (email === USER_CREDENTIALS.email && password === USER_CREDENTIALS.password) {
    return { success: true, role: 'user', email };
  }
  return { success: false, error: 'Invalid email or password' };
};

export const generateToken = (email, role) => {
  // Simple token generation (for production use JWT)
  return Buffer.from(`${email}:${role}:${Date.now()}`).toString('base64');
};

export const verifyToken = (token) => {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [email, role] = decoded.split(':');
    return { email, role };
  } catch (error) {
    return null;
  }
};

export const setAuthToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
  }
};

export const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
};

export const clearAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
  }
};

export const getCurrentUser = () => {
  const token = getAuthToken();
  if (!token) return null;
  return verifyToken(token);
};

export const isAdmin = () => {
  const user = getCurrentUser();
  return user?.role === 'admin';
};
