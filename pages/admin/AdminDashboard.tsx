
import React from 'react';
import { useData } from '../../context/DataContext';

const AdminDashboard: React.FC = () => {
  const { candidates, employers, jobs } = useData();

  // Simple Metrics
  const activeJobs = jobs.length;
  const totalCandidates = candidates.length;
  const activeEmployers = employers.filter(e => e.status === 'Active').length;
  const revenueForecast = employers.reduce((acc, emp) => acc + parseInt(emp.dealValue.replace(/[^0-9]/g, '')), 0);

  return (
    <div className="animate-fade-in-up">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Revenue Pipeline', value: `$${(revenueForecast/1000).toFixed(0)}k`, icon: 'fa-dollar-sign', color: 'bg-green-500' },
          { label: 'Active Candidates', value: totalCandidates, icon: 'fa-users', color: 'bg-blue-500' },
          { label: 'Open Jobs', value: activeJobs, icon: 'fa-briefcase', color: 'bg-purple-500' },
          { label: 'Active Clients', value: activeEmployers, icon: 'fa-building', color: 'bg-orange-500' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${stat.color} text-white flex items-center justify-center text-xl shadow-md`}>
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">+12%</span>
            </div>
            <h3 className="text-3xl font-heading font-bold text-gray-800">{stat.value}</h3>
            <p className="text-sm text-gray-400 font-bold uppercase tracking-wide mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activity / Simulated Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg text-[#0A2540] mb-6">Placement Velocity</h3>
          <div className="h-64 flex items-end justify-between gap-2 px-4">
            {[40, 65, 45, 80, 55, 90, 75, 100, 85, 60, 70, 95].map((h, i) => (
              <div key={i} className="w-full bg-blue-50 rounded-t-lg relative group">
                <div 
                  className="absolute bottom-0 left-0 w-full bg-[#0A2540] rounded-t-lg transition-all duration-500 group-hover:bg-[#00D084]" 
                  style={{ height: `${h}%` }}
                ></div>
                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded">
                  {h} Placements
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-4 uppercase font-bold tracking-wider">
            <span>Jan</span><span>Dec</span>
          </div>
        </div>

        {/* Recent Candidates */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-[#0A2540]">Newest Candidates</h3>
            <button className="text-sm text-[#00D084] font-bold">View All</button>
          </div>
          <div className="space-y-4">
            {candidates.slice(0, 4).map((c) => (
              <div key={c.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                  {c.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-sm">{c.name}</h4>
                  <p className="text-xs text-gray-500">{c.role}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${
                  c.status === 'New' ? 'bg-blue-100 text-blue-600' :
                  c.status === 'Interview' ? 'bg-purple-100 text-purple-600' :
                  'bg-green-100 text-green-600'
                }`}>{c.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
