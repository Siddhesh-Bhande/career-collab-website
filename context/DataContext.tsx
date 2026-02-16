
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Job, BlogPost, Candidate, Employer } from '../types';
import { MOCK_JOBS, MOCK_BLOG_POSTS } from '../constants';

// Initial Mock Data for CRM
const INITIAL_CANDIDATES: Candidate[] = [
  { id: '1', name: 'Sarah Connor', email: 'sarah@example.com', phone: '+1 555 0101', role: 'Senior React Engineer', resumeUrl: '#', status: 'Interview', notes: 'Strong technical skills, weak on system design.', appliedDate: '2023-10-25', rating: 4 },
  { id: '2', name: 'John Smith', email: 'john@example.com', phone: '+1 555 0102', role: 'Product Manager', resumeUrl: '#', status: 'New', notes: 'Application received via LinkedIn.', appliedDate: '2023-10-26', rating: 0 },
  { id: '3', name: 'Emily Chen', email: 'emily@example.com', phone: '+1 555 0103', role: 'UX Designer', resumeUrl: '#', status: 'Screening', notes: 'Portfolio looks amazing. Schedule intro call.', appliedDate: '2023-10-24', rating: 5 },
];

const INITIAL_EMPLOYERS: Employer[] = [
  { id: '1', companyName: 'TechNova', contactPerson: 'Mike Ross', email: 'mike@technova.io', industry: 'FinTech', status: 'Active', dealValue: '$120,000', lastContact: '2 days ago', activeRoles: 3 },
  { id: '2', companyName: 'GreenEarth', contactPerson: 'Rachel Zane', email: 'rachel@green.com', industry: 'Energy', status: 'Lead', dealValue: '$45,000', lastContact: '1 week ago', activeRoles: 1 },
];

interface DataContextType {
  jobs: Job[];
  blogPosts: BlogPost[];
  candidates: Candidate[];
  employers: Employer[];
  addJob: (job: Job) => void;
  deleteJob: (id: string) => void;
  addBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;
  updateCandidateStatus: (id: string, status: Candidate['status']) => void;
  addCandidate: (candidate: Candidate) => void;
  addEmployer: (employer: Employer) => void;
  updateEmployerStatus: (id: string, status: Employer['status']) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(MOCK_BLOG_POSTS);
  const [candidates, setCandidates] = useState<Candidate[]>(INITIAL_CANDIDATES);
  const [employers, setEmployers] = useState<Employer[]>(INITIAL_EMPLOYERS);

  const addJob = (job: Job) => setJobs([job, ...jobs]);
  const deleteJob = (id: string) => setJobs(jobs.filter(j => j.id !== id));

  const addBlogPost = (post: BlogPost) => setBlogPosts([post, ...blogPosts]);
  const deleteBlogPost = (id: string) => setBlogPosts(blogPosts.filter(b => b.id !== id));

  const updateCandidateStatus = (id: string, status: Candidate['status']) => {
    setCandidates(candidates.map(c => c.id === id ? { ...c, status } : c));
  };
  
  const addCandidate = (candidate: Candidate) => setCandidates([candidate, ...candidates]);

  const addEmployer = (employer: Employer) => setEmployers([employer, ...employers]);
  const updateEmployerStatus = (id: string, status: Employer['status']) => {
    setEmployers(employers.map(e => e.id === id ? { ...e, status } : e));
  };

  return (
    <DataContext.Provider value={{ 
      jobs, blogPosts, candidates, employers,
      addJob, deleteJob, addBlogPost, deleteBlogPost,
      updateCandidateStatus, addCandidate,
      addEmployer, updateEmployerStatus
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};
