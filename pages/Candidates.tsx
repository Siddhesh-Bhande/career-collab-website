
import React, { useState, useRef, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { CANDIDATE_FAQS } from '../constants';

const Candidates: React.FC = () => {
  const { addCandidate } = useData();
  
  // Modal State
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Salary Tool State
  const [selectedRole, setSelectedRole] = useState('Software Engineer');
  const [selectedLevel, setSelectedLevel] = useState('Senior');
  
  // FAQ State
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  // Form State
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    experience: '0-2',
    currentRole: '',
    targetRoles: '',
    expectedSalary: '',
    location: '',
    relocation: 'No',
    skills: '',
    notes: ''
  });

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle');

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isApplyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isApplyModalOpen]);

  // Helper Functions
  const toggleFaq = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };
  
  const getSalaryRange = () => {
    let base = 80000;
    if (selectedRole === 'Software Engineer') base = 120000;
    if (selectedRole === 'Product Manager') base = 110000;
    if (selectedRole === 'Data Scientist') base = 130000;
    if (selectedRole === 'Sales Director') base = 100000;

    let multiplier = 1;
    if (selectedLevel === 'Mid-Level') multiplier = 1.2;
    if (selectedLevel === 'Senior') multiplier = 1.5;
    if (selectedLevel === 'Lead/Principal') multiplier = 1.9;

    const low = Math.round(base * multiplier);
    const high = Math.round(low * 1.3);
    
    return `$${(low/1000).toFixed(0)}k - $${(high/1000).toFixed(0)}k`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API submission delay
    setTimeout(() => {
        addCandidate({
            id: Date.now().toString(),
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            role: formData.targetRoles || formData.currentRole,
            resumeUrl: fileName || 'resume.pdf',
            status: 'New',
            notes: `
              LinkedIn: ${formData.linkedin}
              Portfolio: ${formData.portfolio}
              Current Role: ${formData.currentRole}
              Exp: ${formData.experience} years
              Skills: ${formData.skills}
              Salary Exp: ${formData.expectedSalary}
              Location: ${formData.location} (Relocate: ${formData.relocation})
              Notes: ${formData.notes}
            `,
            appliedDate: new Date().toISOString().split('T')[0],
            rating: 0
        });
        setFormStatus('success');
    }, 1500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(newsletterEmail) setNewsletterStatus('success');
  };

  return (
    <div className="pt-20">
      {/* 1. HERO SECTION: Aggressive Value Prop */}
      <section className="bg-primary text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 rounded-full border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
               <i className="fas fa-lock"></i> Exclusive Access
             </div>
             <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
               Stop Applying. <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-emerald-300">Start Being Scouted.</span>
             </h1>
             <p className="text-lg text-gray-300 mb-8 leading-relaxed">
               The best roles are never posted on job boards. We give you direct access to the "Hidden Job Market" at world-class companies, while negotiating a 20%+ higher salary on your behalf.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsApplyModalOpen(true)}
                  className="px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-white transition-all text-center shadow-[0_0_20px_rgba(0,208,132,0.3)] transform hover:-translate-y-1"
                >
                  Join the Private Network
                </button>
                <a href="#salary-tool" className="px-8 py-4 border border-white/30 rounded-lg font-bold hover:bg-white/10 transition-colors text-center">
                   Check Your Market Rate
                </a>
             </div>
             <p className="mt-6 text-xs text-gray-400">
               <i className="fas fa-check-circle text-secondary mr-1"></i> 100% Free for Candidates
               <span className="mx-2">•</span>
               <i className="fas fa-check-circle text-secondary mr-1"></i> Totally Confidential
             </p>
          </div>
          
          {/* Hero Stats/Visual */}
          <div className="lg:w-1/2 w-full">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                   <div className="text-3xl font-heading font-bold text-white mb-1">+$28k</div>
                   <div className="text-xs text-gray-400 uppercase">Avg. Salary Increase</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                   <div className="text-3xl font-heading font-bold text-white mb-1">14 Days</div>
                   <div className="text-xs text-gray-400 uppercase">Avg. Placement Time</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                   <div className="text-3xl font-heading font-bold text-white mb-1">3.5x</div>
                   <div className="text-xs text-gray-400 uppercase">Higher Interview Rate</div>
                </div>
                <div className="bg-secondary text-primary p-6 rounded-2xl flex items-center justify-center">
                   <div className="text-center">
                     <div className="text-3xl font-heading font-bold mb-1">80%</div>
                     <div className="text-xs font-bold uppercase opacity-80">Roles are Unlisted</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: LIVE PLACEMENT TRACKER (Social Proof) */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-2">Recent Placements</h2>
                  <p className="text-gray-500">Real results from the last 30 days. We don't just promise; we deliver.</p>
               </div>
               <div className="hidden md:block">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Live Activity
                  </span>
               </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
               {[
                  { role: "Senior Backend Engineer", sector: "Fintech", comp: "$210k Base", lift: "+$45k", time: "12 Days" },
                  { role: "VP of Marketing", sector: "SaaS", comp: "$250k + Equity", lift: "+$60k", time: "21 Days" },
                  { role: "Lead Product Designer", sector: "HealthTech", comp: "$185k Base", lift: "+$30k", time: "14 Days" },
                  { role: "Director of Sales", sector: "Cybersecurity", comp: "$300k OTE", lift: "+$85k", time: "18 Days" },
               ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
                     <div className="text-xs font-bold text-secondary uppercase mb-2">{item.sector}</div>
                     <h3 className="font-bold text-primary text-lg mb-4">{item.role}</h3>
                     <div className="space-y-3 text-sm">
                        <div className="flex justify-between border-b border-gray-50 pb-2">
                           <span className="text-gray-400">Offer</span>
                           <span className="font-bold text-gray-700">{item.comp}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-50 pb-2">
                           <span className="text-gray-400">Salary Lift</span>
                           <span className="font-bold text-green-600">{item.lift}</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-gray-400">Time to Hire</span>
                           <span className="font-bold text-gray-700">{item.time}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* NEW SECTION 2: THE TALENT AGENT MODEL (Service Value) */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="text-secondary font-bold text-sm uppercase tracking-widest">The Career Collab Difference</span>
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">Sports Stars Have Agents. <br/>Why Shouldn't You?</h2>
               <p className="text-gray-500 mt-4 text-lg">
                  Traditional recruiters are transactional. We operate as your dedicated Talent Agent, managing your career lifecycle with a comprehensive suite of services.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
               {/* Feature 1 */}
               <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                     <i className="fas fa-file-signature"></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Resume & Brand Audit</h3>
                  <p className="text-gray-500 leading-relaxed mb-4">
                     We don't just forward your PDF. We restructure your narrative, optimize for ATS, and polish your LinkedIn to position you as the "Must-Hire" candidate.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                     <li className="flex items-center gap-2"><i className="fas fa-check text-green-500 text-xs"></i> ATS Keyword Optimization</li>
                     <li className="flex items-center gap-2"><i className="fas fa-check text-green-500 text-xs"></i> Narrative Structuring</li>
                  </ul>
               </div>

               {/* Feature 2 */}
               <div className="group p-8 rounded-2xl bg-primary text-white shadow-2xl transform md:-translate-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform relative z-10">
                     <i className="fas fa-chess-knight"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">Executive Interview Prep</h3>
                  <p className="text-gray-300 leading-relaxed mb-4 relative z-10">
                     We decode the hiring manager's psyche before you step in the room. You'll receive a briefing dossier on interviewers, culture flags, and strategic talking points.
                  </p>
                  <ul className="text-sm text-gray-300 space-y-2 relative z-10">
                     <li className="flex items-center gap-2"><i className="fas fa-check text-secondary text-xs"></i> Mock Interview Sessions</li>
                     <li className="flex items-center gap-2"><i className="fas fa-check text-secondary text-xs"></i> Hiring Manager Dossiers</li>
                  </ul>
               </div>

               {/* Feature 3 */}
               <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                     <i className="fas fa-hand-holding-usd"></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Compensation Strategy</h3>
                  <p className="text-gray-500 leading-relaxed mb-4">
                     Never leave money on the table. We handle the awkward money talks, leveraging real-time market data to maximize your base, equity, and signing bonus.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                     <li className="flex items-center gap-2"><i className="fas fa-check text-green-500 text-xs"></i> Equity Valuation Analysis</li>
                     <li className="flex items-center gap-2"><i className="fas fa-check text-green-500 text-xs"></i> Offer Benchmarking</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 2. THE PROBLEM/SOLUTION: "Digital Marketing" Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">The Job Market is Broken. <br/>We Fixed It.</h2>
            <p className="text-gray-500 text-lg">
              Most candidates are stuck in the "Resume Black Hole." We built a fast lane directly to the decision-makers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            {/* The Old Way */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wider text-center">The "Standard" Way</h3>
              <ul className="space-y-6">
                {[
                  "Applying to 100+ jobs and hearing nothing back.",
                  "Getting filtered out by automated ATS bots.",
                  "Going in blind on salary and leaving money on the table.",
                  "Dealing with clueless recruiters who ghost you."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-gray-500">
                    <i className="fas fa-times-circle text-red-300 text-xl mt-1 shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Career Collab Way */}
            <div className="bg-[#0A2540] text-white p-8 lg:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold text-secondary mb-6 uppercase tracking-wider text-center">The Career Collab Way</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Direct introduction to Hiring Managers (skip the line).",
                  "Resume optimization to bypass ATS filters.",
                  "Insider salary data so you negotiate from power.",
                  "A dedicated Talent Agent coaching you through every step."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <i className="fas fa-check-circle text-secondary text-xl mt-1 shrink-0"></i>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 text-center">
                <button 
                  onClick={() => setIsApplyModalOpen(true)}
                  className="w-full py-3 bg-secondary text-primary font-bold rounded hover:bg-white transition-colors"
                >
                  Get Your Advantage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: PARTNER ECOSYSTEM (Authority) */}
      <section className="py-20 bg-white border-t border-gray-100">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/3">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Elite Partner Ecosystem</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                     We don't work with just anyone. We partner exclusively with high-growth, well-funded organizations that value top-tier talent. When we present you, it carries weight.
                  </p>
                  <div className="flex gap-4">
                     <div className="text-center">
                        <div className="text-2xl font-bold text-primary">500+</div>
                        <div className="text-xs text-gray-400 uppercase">Partners</div>
                     </div>
                     <div className="w-px bg-gray-200 h-10"></div>
                     <div className="text-center">
                        <div className="text-2xl font-bold text-primary">80%</div>
                        <div className="text-xs text-gray-400 uppercase">Retention</div>
                     </div>
                  </div>
               </div>
               
               <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                     { icon: "fa-rocket", title: "Series B+ Startups", desc: "High Growth" },
                     { icon: "fa-building", title: "Global Enterprise", desc: "Fortune 500" },
                     { icon: "fa-university", title: "Fintech Disruptors", desc: "Pre-IPO" },
                     { icon: "fa-laptop-code", title: "SaaS Platforms", desc: "B2B Tech" },
                     { icon: "fa-dna", title: "Biotech & Health", desc: "Innovation" },
                     { icon: "fa-shield-alt", title: "Cybersecurity", desc: "Defense" },
                  ].map((item, idx) => (
                     <div key={idx} className="p-4 border border-gray-100 rounded-lg hover:border-secondary/50 hover:bg-secondary/5 transition-all cursor-default group">
                        <i className={`fas ${item.icon} text-secondary text-xl mb-2 group-hover:scale-110 transition-transform inline-block`}></i>
                        <h4 className="font-bold text-primary text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 3. SALARY TOOL: Engagement Magnet */}
      <section id="salary-tool" className="py-20 bg-gray-900 text-white relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-heading font-bold mb-4">Are You Underpaid?</h2>
             <p className="text-gray-400">See what top companies are paying for your role right now.</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl">
             <div className="grid md:grid-cols-3 gap-6 items-end">
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Target Role</label>
                   <select 
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                   >
                      <option>Software Engineer</option>
                      <option>Product Manager</option>
                      <option>Data Scientist</option>
                      <option>Sales Director</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Seniority Level</label>
                   <select 
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                   >
                      <option>Entry Level</option>
                      <option>Mid-Level</option>
                      <option>Senior</option>
                      <option>Lead/Principal</option>
                   </select>
                </div>
                <div className="bg-gradient-to-br from-secondary to-emerald-600 rounded-lg p-0.5">
                   <div className="bg-gray-800 rounded p-3 text-center h-full flex flex-col justify-center">
                      <p className="text-xs font-bold text-secondary uppercase mb-1">Estimated Market Range</p>
                      <div className="font-heading font-extrabold text-2xl text-white">
                         {getSalaryRange()}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER: Passive Candidates */}
      <section className="py-20 bg-light relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white border border-gray-200 rounded-2xl p-10 shadow-lg">
               <div className="md:w-1/2">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">Job Alerts</div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">Not actively looking?</h2>
                  <p className="text-gray-500 text-lg leading-relaxed">
                     That's actually the best time to explore. Subscribe to our "Curated Drops" – a weekly email of the top 5 unlisted executive roles.
                  </p>
               </div>
               <div className="md:w-1/2 w-full">
                  {newsletterStatus === 'success' ? (
                     <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl text-center">
                        <p className="text-green-600 font-bold text-lg"><i className="fas fa-check-circle mr-2"></i> You're on the list!</p>
                     </div>
                  ) : (
                     <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                        <input 
                           type="email" 
                           placeholder="Enter your email address" 
                           value={newsletterEmail} 
                           onChange={(e) => setNewsletterEmail(e.target.value)}
                           className="flex-grow px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
                           required
                        />
                        <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary hover:text-primary transition-colors shadow-lg">
                           Subscribe
                        </button>
                     </form>
                  )}
                  <p className="text-gray-400 text-xs mt-4 ml-2">No spam. One email per week. Unsubscribe anytime.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. FAQ Accordion */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {CANDIDATE_FAQS.map((faq, idx) => (
                 <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    >
                       <span className={`font-bold text-lg ${faqOpenIndex === idx ? 'text-secondary' : 'text-primary'}`}>
                         {faq.question}
                       </span>
                       <i className={`fas fa-chevron-down transition-transform duration-300 text-gray-400 ${faqOpenIndex === idx ? 'transform rotate-180' : ''}`}></i>
                    </button>
                    <div className={`px-6 overflow-hidden transition-all duration-300 ${faqOpenIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                       <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-heading font-bold text-white mb-6">Ready to make your move?</h2>
           <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join 15,000+ professionals who trust Career Collab to manage their careers, not just their job search.</p>
           <button 
              onClick={() => setIsApplyModalOpen(true)}
              className="px-12 py-5 bg-secondary text-primary font-bold text-xl rounded-full hover:bg-white transition-all shadow-xl hover:scale-105"
           >
             Submit Your Profile
           </button>
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* APPLICATION MODAL (The Form)                     */}
      {/* ------------------------------------------------ */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
            onClick={() => setIsApplyModalOpen(false)}
          ></div>

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col animate-fade-in-up overflow-hidden">
             
             {/* Modal Header */}
             <div className="bg-primary text-white p-6 md:p-8 flex justify-between items-start shrink-0">
                <div>
                  <h2 className="text-2xl font-heading font-bold">Candidate Application</h2>
                  <p className="text-gray-400 text-sm mt-1">Complete your profile to unlock exclusive opportunities.</p>
                </div>
                <button 
                  onClick={() => setIsApplyModalOpen(false)}
                  className="text-white/50 hover:text-white transition-colors p-2"
                >
                  <i className="fas fa-times text-2xl"></i>
                </button>
             </div>

             {/* Modal Body (Scrollable) */}
             <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
                
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">
                       <i className="fas fa-check"></i>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-primary mb-4">Application Received!</h3>
                    <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
                      Your profile has been securely added to our Talent Vault. Our specialists are reviewing your details and will contact you within 48 hours if we have a match.
                    </p>
                    <button 
                      onClick={() => { setFormStatus('idle'); setIsApplyModalOpen(false); }}
                      className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-secondary hover:text-primary transition-colors"
                    >
                      Return to Home
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                     {/* Section 1: Personal Info */}
                     <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-6">
                           1. Contact Details
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                           <div>
                              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">First Name *</label>
                              <input required name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Last Name *</label>
                              <input required name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Email Address *</label>
                              <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Phone Number *</label>
                              <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                           </div>
                        </div>
                     </div>

                     {/* Section 2: Professional Profile */}
                     <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-6">
                           2. Experience
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                           <div>
                              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">LinkedIn URL *</label>
                              <input required type="url" name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="https://linkedin.com/in/..." className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Portfolio / Website</label>
                              <input type="url" name="portfolio" value={formData.portfolio} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Current Job Title *</label>
                              <input required name="currentRole" value={formData.currentRole} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Years of Experience</label>
                              <select name="experience" value={formData.experience} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all">
                                 <option>0-2 Years</option>
                                 <option>3-5 Years</option>
                                 <option>6-10 Years</option>
                                 <option>10+ Years</option>
                              </select>
                           </div>
                        </div>
                        <div>
                           <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Core Skills (Comma separated)</label>
                           <input name="skills" value={formData.skills} onChange={handleInputChange} placeholder="e.g. React, Node.js, Project Management, Sales" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                        </div>
                     </div>

                     {/* Section 3: Job Preferences */}
                     <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-6">
                           3. Preferences
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                           <div>
                              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Target Roles *</label>
                              <input required name="targetRoles" value={formData.targetRoles} onChange={handleInputChange} placeholder="e.g. Senior Product Manager" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Desired Salary Range</label>
                              <input name="expectedSalary" value={formData.expectedSalary} onChange={handleInputChange} placeholder="e.g. $120k - $150k" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Preferred Location</label>
                              <input name="location" value={formData.location} onChange={handleInputChange} placeholder="e.g. Remote or NYC" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Relocation?</label>
                              <select name="relocation" value={formData.relocation} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all">
                                 <option>No</option>
                                 <option>Yes</option>
                                 <option>Ideally Remote</option>
                              </select>
                           </div>
                        </div>
                     </div>

                     {/* Section 4: Attachments */}
                     <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-6">
                           4. Resume & Notes
                        </h3>
                        
                        <div className="mb-6">
                           <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Resume / CV *</label>
                           <div 
                             className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 hover:border-secondary transition-colors cursor-pointer group"
                             onClick={() => fileInputRef.current?.click()}
                           >
                              <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                              <div className="w-12 h-12 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary group-hover:text-white transition-colors">
                                 <i className={`fas ${fileName ? 'fa-check' : 'fa-cloud-upload-alt'}`}></i>
                              </div>
                              {fileName ? (
                                <p className="font-bold text-primary">{fileName}</p>
                              ) : (
                                <>
                                  <p className="font-bold text-gray-700">Click to Upload Resume</p>
                                  <p className="text-xs text-gray-400 mt-1">PDF or Word (Max 5MB)</p>
                                </>
                              )}
                           </div>
                        </div>

                        <div>
                           <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Cover Note</label>
                           <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={3} placeholder="Tell us about your career goals..." className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all"></textarea>
                        </div>
                     </div>
                  </form>
                )}
             </div>

             {/* Modal Footer */}
             {formStatus !== 'success' && (
                <div className="p-6 border-t border-gray-100 bg-gray-50 shrink-0">
                  <button 
                    onClick={handleSubmit}
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-[#0f3459] transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? (
                      <><i className="fas fa-circle-notch fa-spin"></i> Processing...</>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    Secure 256-bit encryption. We never share your data without permission.
                  </p>
                </div>
             )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Candidates;
