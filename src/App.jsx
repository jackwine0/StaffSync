// src/App.jsx
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard/AdminDashboard';
import HRDashboard from './pages/hr/HRDashboard';
import EmployeeDashboard from './pages/employee/EmployeeDashboard';

// Helper: Fetch user from localStorage
const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Protected route wrapper
const ProtectedRoute = ({ children, allowedRole }) => {
  const user = getUser();

  if (!user) return <Navigate to="/" replace />;
  if (user.role !== allowedRole) return <Navigate to="/" replace />;

  return children;
};

const App = () => (
    <Routes>
      {/* Public Route: Login */}
      <Route path="/" element={<LoginPage />} />

      {/* Admin */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* HR */}
      <Route
        path="/hr/dashboard"
        element={
          <ProtectedRoute allowedRole="hr">
            <HRDashboard />
          </ProtectedRoute>
        }
      />

      {/* Employee */}
      <Route
        path="/employee/dashboard"
        element={
          <ProtectedRoute allowedRole="employee">
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
);

export default App;
