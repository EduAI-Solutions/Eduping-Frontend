import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AuthLayout from '@/layouts/AuthLayout';
import MainLayout from '@/layouts/MainLayout';
import Chat from '@/pages/Chat/Chat';
import Login from '@/pages/Login/page';

const isAuthenticated = true;

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route
          element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}
        >
          <Route path="/" element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
