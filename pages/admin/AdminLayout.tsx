
import React from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail') || 'Admin';

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('userEmail');
    navigate('/admin');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: 'fa-chart-pie' },
    { name: 'Candidates CRM', path: '/admin/candidates', icon: 'fa-users' },
    { name: 'Employers CRM', path: '/admin/employers', icon: 'fa-briefcase' },
    { name: 'Jobs', path: '/admin/jobs', icon: 'fa-list-alt' },
    { name: 'Content (CMS)', path: '/admin/content', icon: 'fa-pen-fancy' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-50 font-body">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A2540] text-white flex flex-col flex-shrink-0 transition-all duration-300">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00D084] rounded-lg flex items-center justify-center text-[#0A2540] font-bold">C</div>
            <span className="font-heading font-bold text-lg">CareerCollab</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive(item.path) 
                  ? 'bg-[#00D084] text-[#0A2540] font-bold shadow-lg' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <i className={`fas ${item.icon} w-5 text-center`}></i>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-white/5 rounded-lg transition-colors text-sm"
          >
            <i className="fas fa-sign-out-alt w-5"></i>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-xl font-heading font-bold text-[#0A2540]">
            {navItems.find(i => i.path === location.pathname)?.name || 'Admin'}
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-gray-800">{userEmail}</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=Admin+User&background=0A2540&color=fff" alt="Admin" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
