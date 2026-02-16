import React from 'react';
import { Link } from 'react-router-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'general' | 'hiring' | 'looking';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <div className="p-8 text-center">
          {type === 'general' ? (
            <>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">How can we help?</h3>
              <p className="text-gray-500 mb-8">Select the option that best describes your needs.</p>
              
              <div className="space-y-4">
                <Link 
                  to="/employers" 
                  onClick={onClose}
                  className="block w-full py-4 px-6 border-2 border-primary/10 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-primary text-lg">I'm Hiring Talent</h4>
                      <p className="text-sm text-gray-500">Find the perfect candidate for your team</p>
                    </div>
                    <i className="fas fa-arrow-right text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </div>
                </Link>
                
                <Link 
                  to="/candidates" 
                  onClick={onClose}
                  className="block w-full py-4 px-6 border-2 border-secondary/20 rounded-lg hover:border-secondary hover:bg-secondary/5 transition-all group text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-primary text-lg">I'm Looking for a Job</h4>
                      <p className="text-sm text-gray-500">Browse openings and submit your resume</p>
                    </div>
                    <i className="fas fa-arrow-right text-secondary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </div>
                </Link>
              </div>
            </>
          ) : (
             // Simple form placeholder for specific actions
            <>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                {type === 'hiring' ? 'Start Hiring' : 'Join Our Network'}
              </h3>
              <p className="text-gray-500 mb-6">
                {type === 'hiring' 
                  ? 'Tell us about the role you are looking to fill.' 
                  : 'Upload your resume to get matched with top companies.'}
              </p>
              
              <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); alert("This would connect to your WPForms or API backend."); onClose(); }}>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded p-2 focus:border-secondary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email</label>
                  <input type="email" className="w-full border border-gray-300 rounded p-2 focus:border-secondary focus:outline-none" />
                </div>
                {type === 'hiring' && (
                   <div>
                   <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Company</label>
                   <input type="text" className="w-full border border-gray-300 rounded p-2 focus:border-secondary focus:outline-none" />
                 </div>
                )}
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-opacity-90 transition-opacity mt-4">
                  {type === 'hiring' ? 'Request Consultation' : 'Submit Profile'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;