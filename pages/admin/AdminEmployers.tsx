
import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Employer } from '../../types';

const AdminEmployers: React.FC = () => {
  const { employers, addEmployer, updateEmployerStatus } = useData();
  const [isAdding, setIsAdding] = useState(false);
  const [newEmp, setNewEmp] = useState<Partial<Employer>>({
    companyName: '', contactPerson: '', email: '', industry: '', dealValue: ''
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addEmployer({
      id: Date.now().toString(),
      companyName: newEmp.companyName!,
      contactPerson: newEmp.contactPerson!,
      email: newEmp.email!,
      industry: newEmp.industry!,
      dealValue: newEmp.dealValue!,
      status: 'Lead',
      lastContact: 'Today',
      activeRoles: 0
    } as Employer);
    setIsAdding(false);
    setNewEmp({ companyName: '', contactPerson: '', email: '', industry: '', dealValue: '' });
  };

  return (
    <div className="animate-fade-in-up">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#0A2540]">Client Relationship Management</h1>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-[#0A2540] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#00D084] hover:text-[#0A2540] transition-colors shadow-lg"
        >
          <i className="fas fa-plus mr-2"></i> Add Client
        </button>
      </div>

       {/* Add Form */}
       {isAdding && (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
          <h3 className="font-bold text-lg mb-4">New Client Account</h3>
          <form onSubmit={handleAdd} className="grid grid-cols-2 gap-4">
             <input type="text" placeholder="Company Name" className="border p-2 rounded" value={newEmp.companyName} onChange={e => setNewEmp({...newEmp, companyName: e.target.value})} />
             <input type="text" placeholder="Contact Person" className="border p-2 rounded" value={newEmp.contactPerson} onChange={e => setNewEmp({...newEmp, contactPerson: e.target.value})} />
             <input type="text" placeholder="Deal Value ($)" className="border p-2 rounded" value={newEmp.dealValue} onChange={e => setNewEmp({...newEmp, dealValue: e.target.value})} />
             <input type="text" placeholder="Industry" className="border p-2 rounded" value={newEmp.industry} onChange={e => setNewEmp({...newEmp, industry: e.target.value})} />
             <input type="email" placeholder="Email" className="border p-2 rounded col-span-2" value={newEmp.email} onChange={e => setNewEmp({...newEmp, email: e.target.value})} />
             <button className="bg-green-500 text-white font-bold py-2 rounded col-span-2 hover:bg-green-600">Create Account</button>
          </form>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employers.map((emp) => (
          <div key={emp.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-xl font-bold text-gray-400 group-hover:bg-[#0A2540] group-hover:text-white transition-colors">
                {emp.companyName.charAt(0)}
              </div>
              <select 
                value={emp.status}
                onChange={(e) => updateEmployerStatus(emp.id, e.target.value as Employer['status'])}
                className={`text-xs font-bold px-3 py-1 rounded-full border-none cursor-pointer ${
                  emp.status === 'Active' ? 'bg-green-100 text-green-700' :
                  emp.status === 'Lead' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                }`}
              >
                <option value="Lead">Lead</option>
                <option value="Active">Active</option>
                <option value="Churned">Churned</option>
              </select>
            </div>
            
            <h3 className="text-xl font-bold text-[#0A2540] mb-1">{emp.companyName}</h3>
            <p className="text-sm text-gray-500 mb-4">{emp.industry}</p>
            
            <div className="space-y-2 text-sm border-t border-gray-100 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Contact:</span>
                <span className="font-medium text-gray-700">{emp.contactPerson}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Value:</span>
                <span className="font-medium text-green-600">{emp.dealValue}</span>
              </div>
               <div className="flex justify-between">
                <span className="text-gray-400">Last Touch:</span>
                <span className="font-medium text-gray-700">{emp.lastContact}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button className="flex-1 bg-gray-50 text-gray-600 py-2 rounded font-bold text-xs hover:bg-[#0A2540] hover:text-white transition-colors">
                View Profile
              </button>
              <button className="flex-1 bg-gray-50 text-gray-600 py-2 rounded font-bold text-xs hover:bg-[#00D084] hover:text-[#0A2540] transition-colors">
                Log Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminEmployers;
