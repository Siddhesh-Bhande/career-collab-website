
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_LOGOS, STATS, TEAM, TESTIMONIALS } from '../constants';
import { useData } from '../context/DataContext';
import JobCard from '../components/JobCard';

interface HomeProps {
  onOpenModal: (type: 'hiring' | 'looking') => void;
}

const Home: React.FC<HomeProps> = ({ onOpenModal }) => {
  const { jobs } = useData(); // Consume data from Context
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Live Stats Ticker */}
      <div className="bg-primary border-b border-white/10 hidden md:block pt-20">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center text-xs font-medium tracking-widest text-gray-400 uppercase">
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><i className="fas fa-circle text-green-500 text-[8px] animate-pulse"></i> Live: {jobs.length + 30} Active Searches</span>
            <span className="flex items-center gap-2"><i className="fas fa-globe text-secondary"></i> Placements in 12 Countries</span>
          </div>
          <div className="flex gap-6">
            <span>NY: +1 212 555 0199</span>
            <span>LDN: +44 20 7946 0999</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[#0A2540]">
        <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2301&q=80" alt="Corporate office" className="w-full h-full object-cover opacity-10" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/95 to-[#0A2540]/60"></div>
        </div>
        
        <div className="container relative mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full mb-6 animate-fade-in-down">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Ranked #1 Executive Search Firm 2024</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-8">
              Talent that <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-emerald-300">Defines Future.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
              Career Collab connects elite enterprises with visionary leadership. We don't just fill vacancies; we architect high-performance teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onOpenModal('hiring')}
                className="px-8 py-4 bg-secondary text-primary font-bold rounded hover:bg-white transition-all text-center shadow-[0_0_20px_rgba(0,208,132,0.3)] hover:shadow-[0_0_30px_rgba(0,208,132,0.5)] transform hover:-translate-y-1"
              >
                Start Hiring
              </button>
              <button 
                onClick={() => onOpenModal('looking')}
                className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded hover:bg-white hover:text-primary transition-all text-center backdrop-blur-sm"
              >
                Find a Role
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm text-gray-400">
               <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <img key={i} className="w-8 h-8 rounded-full border-2 border-primary" src={`https://randomuser.me/api/portraits/thumb/men/${i+20}.jpg`} alt="Agent" />
                 ))}
               </div>
               <p>Trusted by <span className="text-white font-bold">500+</span> companies worldwide.</p>
            </div>
          </div>
          
          {/* Hero Card/Stats */}
          <div className="lg:w-2/5 hidden lg:block">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl animate-fade-in-up">
               <h3 className="text-white font-bold text-lg mb-6">Market Pulse</h3>
               <div className="space-y-6">
                 <div className="flex items-center justify-between border-b border-white/10 pb-4">
                   <div>
                     <p className="text-gray-400 text-xs uppercase">Avg. Executive Salary</p>
                     <p className="text-white font-bold text-xl">$245,000</p>
                   </div>
                   <div className="text-emerald-400 text-sm font-bold bg-emerald-400/10 px-2 py-1 rounded">+12% YoY</div>
                 </div>
                 <div className="flex items-center justify-between border-b border-white/10 pb-4">
                   <div>
                     <p className="text-gray-400 text-xs uppercase">Tech Placements</p>
                     <p className="text-white font-bold text-xl">412</p>
                   </div>
                   <div className="text-emerald-400 text-sm font-bold bg-emerald-400/10 px-2 py-1 rounded">Q3 2024</div>
                 </div>
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-gray-400 text-xs uppercase">Client Satisfaction</p>
                     <p className="text-white font-bold text-xl">4.9/5.0</p>
                   </div>
                   <div className="text-yellow-400 text-sm"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar with Animation */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Trusted by Global Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60">
            {COMPANY_LOGOS.map((logo, idx) => (
              <span key={idx} className="text-xl md:text-2xl font-heading font-bold text-gray-300 hover:text-primary transition-colors cursor-default">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-xl mx-auto mb-4">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - The Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-2 block">Our Methodology</span>
               <h2 className="text-4xl font-heading font-bold text-primary mb-6">Precision Engineering for Recruitment.</h2>
               <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                 We don't rely on luck. Our proprietary <strong>Velocity™</strong> framework ensures that every candidate presented is not just qualified, but a catalyst for your company's growth.
               </p>
               
               <div className="space-y-6">
                 {[
                   { title: "Deep-Dive Discovery", desc: "We spend 48 hours analyzing your tech stack, culture, and business goals before sourcing." },
                   { title: "Algorithmic & Human Vetting", desc: "AI-driven sourcing combined with behavioral interviews by industry veterans." },
                   { title: "The 'Perfect Fit' Guarantee", desc: "90-day retention guarantee. If they don't stay, we replace them for free." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">{i+1}</div>
                     <div>
                       <h4 className="font-bold text-primary text-lg">{item.title}</h4>
                       <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="md:w-1/2 relative">
               <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform rotate-3"></div>
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Meeting" className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Jobs - Dynamic */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-2">Featured Opportunities</h2>
              <p className="text-gray-500">Access the hidden job market. 80% of our roles are exclusive.</p>
            </div>
            <Link to="/candidates" className="text-primary font-bold hover:text-secondary transition-colors hidden md:block">
              View All Jobs <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {jobs.slice(0, 4).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/candidates" className="text-primary font-bold hover:text-secondary transition-colors">
              View All Jobs <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="container mx-auto px-6 text-center mb-16">
            <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-2 block">Our Leadership</span>
            <h2 className="text-4xl font-heading font-bold text-primary">Meet the Experts</h2>
         </div>
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
               {TEAM.map((member, idx) => (
                 <div key={idx} className="group relative overflow-hidden rounded-xl">
                    <img src={member.image} alt={member.name} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                       <h3 className="text-white font-bold text-xl">{member.name}</h3>
                       <p className="text-secondary text-sm font-bold mb-2">{member.role}</p>
                       <p className="text-gray-300 text-xs mb-4">{member.bio}</p>
                       <a href={member.linkedin} className="text-white hover:text-secondary"><i className="fab fa-linkedin text-xl"></i></a>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
               <i className="fas fa-quote-left text-6xl text-white/10 mb-8"></i>
               <div className="min-h-[200px] flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-heading font-light leading-relaxed mb-8 italic">
                     "{TESTIMONIALS[activeTestimonial].text}"
                  </h3>
                  <div className="flex items-center justify-center gap-4">
                     <img src={TESTIMONIALS[activeTestimonial].image} alt={TESTIMONIALS[activeTestimonial].author} className="w-14 h-14 rounded-full border-2 border-secondary" />
                     <div className="text-left">
                        <p className="font-bold text-lg">{TESTIMONIALS[activeTestimonial].author}</p>
                        <p className="text-gray-400 text-sm">{TESTIMONIALS[activeTestimonial].role}, {TESTIMONIALS[activeTestimonial].company}</p>
                     </div>
                  </div>
               </div>
               
               <div className="flex justify-center gap-2 mt-12">
                  {TESTIMONIALS.map((_, idx) => (
                     <button 
                        key={idx} 
                        onClick={() => setActiveTestimonial(idx)}
                        className={`w-3 h-3 rounded-full transition-colors ${idx === activeTestimonial ? 'bg-secondary' : 'bg-white/20'}`}
                     ></button>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center relative overflow-hidden">
        <div className="container relative mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">Ready to Transform Your Team?</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Whether you are scaling a startup or optimizing an enterprise, we have the talent network you need.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => onOpenModal('hiring')}
              className="px-10 py-4 bg-primary text-white font-bold text-lg rounded hover:bg-secondary hover:text-primary transition-colors shadow-xl"
            >
              Partner With Us
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-400">No obligation. 100% confidential.</p>
        </div>
      </section>
    </>
  );
};

export default Home;
