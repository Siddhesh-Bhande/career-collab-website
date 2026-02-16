
import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Candidate } from '../../types';

const AdminCandidates: React.FC = () => {
  const { candidates, updateCandidateStatus, addCandidate } = useData();
  const [isAdding, setIsAdding] = useState(false);
  const [filter, setFilter] = useState('All');

  const [newCandidate, setNewCandidate] = useState<Partial<Candidate>>({
    name: '', email: '', role: '', status: 'New', notes: ''
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCandidate.name || !newCandidate.role) return;
    
    addCandidate({
      id: Date.now().toString(),
      name: newCandidate.name!,
      email: newCandidate.email!,
      role: newCandidate.role!,
      status: 'New',
      notes: newCandidate.notes || '',
      phone: '',
      resumeUrl: '#',
      appliedDate: new Date().toISOString().split('T')[0],
      rating: 0
    } as Candidate);
    setIsAdding(false);
    setNewCandidate({ name: '', email: '', role: '', status: 'New', notes: '' });
  };

  const filtered = filter === 'All' ? candidates : candidates.filter(c => c.status === filter);

  return (
    <div className="animate-fade-in-up">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#0A2540]">Candidate Pipeline</h1>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-[#0A2540] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#00D084] hover:text-[#0A2540] transition-colors shadow-lg"
        >
          <i className="fas fa-plus mr-2"></i> Add Candidate
        </button>
      </div>

      {/* Stats Pipeline */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {['New', 'Screening', 'Interview', 'Offer', 'Hired'].map((status) => (
           <div key={status} onClick={() => setFilter(status)} className={`bg-white p-4 rounded-xl border cursor-pointer transition-all ${filter === status ? 'border-[#00D084] shadow-md ring-1 ring-[#00D084]' : 'border-gray-100 hover:border-gray-300'}`}>
              <div className="text-xs text-gray-400 uppercase font-bold mb-1">{status}</div>
              <div className="text-2xl font-bold text-[#0A2540]">
                {candidates.filter(c => c.status === status).length}
              </div>
           </div>
        ))}
      </div>

      {/* Add Form */}
      {isAdding && (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
          <h3 className="font-bold text-lg mb-4">New Candidate Profile</h3>
          <form onSubmit={handleAdd} className="grid grid-cols-2 gap-4">
             <input type="text" placeholder="Full Name" className="border p-2 rounded" value={newCandidate.name} onChange={e => setNewCandidate({...newCandidate, name: e.target.value})} />
             <input type="email" placeholder="Email" className="border p-2 rounded" value={newCandidate.email} onChange={e => setNewCandidate({...newCandidate, email: e.target.value})} />
             <input type="text" placeholder="Target Role" className="border p-2 rounded" value={newCandidate.role} onChange={e => setNewCandidate({...newCandidate, role: e.target.value})} />
             <input type="text" placeholder="Notes" className="border p-2 rounded" value={newCandidate.notes} onChange={e => setNewCandidate({...newCandidate, notes: e.target.value})} />
             <button className="bg-green-500 text-white font-bold py-2 rounded col-span-2 hover:bg-green-600">Save Profile</button>
          </form>
        </div>
      )}

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Name</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Role</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Applied</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Status</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <div className="font-bold text-[#0A2540]">{candidate.name}</div>
                  <div className="text-xs text-gray-400">{candidate.email}</div>
                </td>
                <td className="p-4 text-sm text-gray-600">{candidate.role}</td>
                <td className="p-4 text-sm text-gray-500">{candidate.appliedDate}</td>
                <td className="p-4">
                  <select 
                    value={candidate.status}
                    onChange={(e) => updateCandidateStatus(candidate.id, e.target.value as Candidate['status'])}
                    className={`text-xs font-bold px-3 py-1 rounded-full border-none focus:ring-2 focus:ring-[#00D084] cursor-pointer ${
                      candidate.status === 'New' ? 'bg-blue-100 text-blue-600' :
                      candidate.status === 'Hired' ? 'bg-green-100 text-green-600' :
                      'bg-orange-100 text-orange-600'
                    }`}
                  >
                    {['New', 'Screening', 'Interview', 'Offer', 'Hired', 'Rejected'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </td>
                <td className="p-4">
                  <button className="text-gray-400 hover:text-[#0A2540] mr-3"><i className="fas fa-edit"></i></button>
                  <button className="text-gray-400 hover:text-red-500"><i className="fas fa-trash"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCandidates;
