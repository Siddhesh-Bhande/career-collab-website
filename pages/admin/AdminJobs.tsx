
import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Job } from '../../types';

const AdminJobs: React.FC = () => {
  const { jobs, addJob, deleteJob } = useData();
  const [isAdding, setIsAdding] = useState(false);
  const [newJob, setNewJob] = useState<Partial<Job>>({
    title: '', location: '', type: 'Full-Time', salary: '', category: 'Engineering'
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addJob({
      id: Date.now().toString(),
      title: newJob.title!,
      location: newJob.location!,
      type: newJob.type!,
      salary: newJob.salary!,
      category: newJob.category!,
      postedAt: 'Just now'
    } as Job);
    setIsAdding(false);
    setNewJob({ title: '', location: '', type: 'Full-Time', salary: '', category: 'Engineering' });
  };

  return (
    <div className="animate-fade-in-up">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#0A2540]">Job Listings</h1>
        <button 
          onClick={() => setIsAdding(true)}
          className="bg-[#0A2540] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#00D084] hover:text-[#0A2540] transition-colors shadow-lg"
        >
          <i className="fas fa-plus mr-2"></i> Post Job
        </button>
      </div>

      {isAdding && (
         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
          <form onSubmit={handleAdd} className="grid grid-cols-2 gap-4">
             <input type="text" placeholder="Job Title" className="border p-2 rounded" value={newJob.title} onChange={e => setNewJob({...newJob, title: e.target.value})} required />
             <input type="text" placeholder="Location" className="border p-2 rounded" value={newJob.location} onChange={e => setNewJob({...newJob, location: e.target.value})} required />
             <input type="text" placeholder="Salary Range" className="border p-2 rounded" value={newJob.salary} onChange={e => setNewJob({...newJob, salary: e.target.value})} required />
             <select className="border p-2 rounded" value={newJob.category} onChange={e => setNewJob({...newJob, category: e.target.value})}>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Executive</option>
                <option>Sales</option>
                <option>Design</option>
             </select>
             <button className="bg-green-500 text-white font-bold py-2 rounded col-span-2">Post Job</button>
          </form>
         </div>
      )}

      <div className="space-y-4">
        {jobs.map(job => (
          <div key={job.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow">
            <div>
               <h3 className="font-bold text-[#0A2540]">{job.title}</h3>
               <p className="text-xs text-gray-500">{job.location} • {job.salary}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded uppercase font-bold">{job.category}</span>
              <button onClick={() => deleteJob(job.id)} className="text-red-400 hover:text-red-600"><i className="fas fa-trash"></i></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminJobs;
