import React from 'react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between group">
      <div className="mb-4 md:mb-0">
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-secondary/10 text-emerald-700 text-xs font-bold px-2 py-1 rounded">
            {job.category}
          </span>
          <span className="text-gray-400 text-xs">
            <i className="far fa-clock mr-1"></i> {job.postedAt}
          </span>
        </div>
        <h3 className="text-lg font-heading font-bold text-primary group-hover:text-secondary transition-colors mb-1">
          {job.title}
        </h3>
        <div className="flex gap-4 text-sm text-gray-500">
          <span><i className="fas fa-map-marker-alt mr-1 text-gray-300"></i> {job.location}</span>
          <span><i className="fas fa-dollar-sign mr-1 text-gray-300"></i> {job.salary}</span>
        </div>
      </div>
      <button className="bg-white border-2 border-primary text-primary font-bold px-6 py-2 rounded hover:bg-primary hover:text-white transition-all text-sm whitespace-nowrap">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;