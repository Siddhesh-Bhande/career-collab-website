import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Employers from './pages/Employers';
import Candidates from './pages/Candidates';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Modal from './components/Modal';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCandidates from './pages/admin/AdminCandidates';
import AdminEmployers from './pages/admin/AdminEmployers';
import AdminContent from './pages/admin/AdminContent';
import AdminJobs from './pages/admin/AdminJobs';

import { DataProvider } from './context/DataContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Protected Route Component
const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const isAdmin = localStorage.getItem('isAdmin');
  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }
  return <>{children}</>;
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'general' | 'hiring' | 'looking'>('general');

  const openModal = (type: 'general' | 'hiring' | 'looking' = 'general') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <PublicLayout openModal={openModal}>
              <Home onOpenModal={openModal} />
            </PublicLayout>
          } />
          <Route path="/employers" element={
            <PublicLayout openModal={openModal}>
              <Employers />
            </PublicLayout>
          } />
          <Route path="/candidates" element={
            <PublicLayout openModal={openModal}>
              <Candidates />
            </PublicLayout>
          } />
          <Route path="/success-stories" element={
             <PublicLayout openModal={openModal}>
              <Blog />
            </PublicLayout>
          } />
          <Route path="/about" element={
            <PublicLayout openModal={openModal}>
              <About />
            </PublicLayout>
          } />
          <Route path="/contact" element={
            <PublicLayout openModal={openModal}>
              <Contact />
            </PublicLayout>
          } />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/*" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="candidates" element={<AdminCandidates />} />
            <Route path="employers" element={<AdminEmployers />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="jobs" element={<AdminJobs />} />
          </Route>
        </Routes>

        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          type={modalType}
        />
      </Router>
    </DataProvider>
  );
};

// Helper layout to keep Navbar/Footer only on public pages
const PublicLayout: React.FC<{ children?: React.ReactNode, openModal: any }> = ({ children, openModal }) => (
  <div className="flex flex-col min-h-screen bg-white">
    <Navbar onOpenModal={() => openModal('general')} />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

export default App;