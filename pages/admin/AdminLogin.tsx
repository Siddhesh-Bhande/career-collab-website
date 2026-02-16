
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo Credentials
    if ((email === 'admin@careercollab.com' && password === 'admin123') || 
        (email === 'demo@careercollab.com' && password === 'demo123')) {
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('userEmail', email);
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials. Try admin@careercollab.com / admin123');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A2540] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D084]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-10 rounded-2xl shadow-2xl w-full max-w-md relative z-10 animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#00D084] rounded-xl flex items-center justify-center text-[#0A2540] text-3xl font-bold mx-auto mb-4 shadow-lg">
            C
          </div>
          <h2 className="text-3xl font-heading font-bold text-white mb-2">Admin Portal</h2>
          <p className="text-gray-400">Secure Access for Career Collab Staff</p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded mb-6 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0A2540]/50 border border-gray-600 rounded-lg p-3 text-white focus:border-[#00D084] focus:outline-none transition-colors"
              placeholder="admin@careercollab.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0A2540]/50 border border-gray-600 rounded-lg p-3 text-white focus:border-[#00D084] focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-[#00D084] text-[#0A2540] font-bold py-3 rounded-lg hover:bg-white transition-colors shadow-lg shadow-[#00D084]/20 mt-2">
            Sign In to Dashboard
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Demo Creds: admin@careercollab.com / admin123</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
