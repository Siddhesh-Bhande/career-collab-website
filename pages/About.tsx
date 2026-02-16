
import React from 'react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* 1. Cinematic Hero Section */}
      <section className="relative py-28 bg-[#0A2540] overflow-hidden">
         <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-secondary/5 skew-x-12 transform translate-x-32"></div>
         </div>
         <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1 border border-secondary/30 rounded-full bg-secondary/10 mb-6 backdrop-blur-md">
               <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">Est. 2014 • Global Reach</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-8 leading-tight">
               Architecting the <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-emerald-300">Workforce of Tomorrow.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
               We are not just headhunters. We are strategic growth partners for the world's most innovative companies. We believe that one right hire can change the trajectory of an entire organization.
            </p>
         </div>
      </section>

      {/* 2. Stats & Authority Bar */}
      <section className="py-12 bg-white border-b border-gray-100 relative -mt-8 mx-6 rounded-xl shadow-xl z-20">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 text-center">
            <div>
               <div className="text-4xl font-heading font-bold text-primary mb-1">10+</div>
               <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Years of Excellence</div>
            </div>
            <div>
               <div className="text-4xl font-heading font-bold text-primary mb-1">12</div>
               <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Global Offices</div>
            </div>
            <div>
               <div className="text-4xl font-heading font-bold text-primary mb-1">$450M+</div>
               <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Salaries Negotiated</div>
            </div>
            <div>
               <div className="text-4xl font-heading font-bold text-primary mb-1">15k+</div>
               <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Careers Accelerated</div>
            </div>
         </div>
      </section>

      {/* 3. The Origin Story (Timeline) */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
               <div className="md:w-1/2">
                  <h4 className="text-secondary font-bold uppercase tracking-widest mb-2">Our Origins</h4>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">From a Coffee Shop to 4 Continents.</h2>
                  <div className="space-y-8 relative pl-8 border-l-2 border-gray-200">
                     <div className="relative">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 bg-secondary rounded-full border-4 border-gray-50"></span>
                        <h4 className="font-bold text-primary text-lg">2014: The Inception</h4>
                        <p className="text-gray-500 text-sm mt-1">Founded by Alex Mercer in San Francisco with a laptop and a vision to disrupt the transactional nature of recruiting.</p>
                     </div>
                     <div className="relative">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-300 rounded-full border-4 border-gray-50"></span>
                        <h4 className="font-bold text-primary text-lg">2017: The Tech Pivot</h4>
                        <p className="text-gray-500 text-sm mt-1">Launched our proprietary "Velocity™" AI sourcing engine, reducing time-to-hire by 40% for our clients.</p>
                     </div>
                     <div className="relative">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-300 rounded-full border-4 border-gray-50"></span>
                        <h4 className="font-bold text-primary text-lg">2021: Global Expansion</h4>
                        <p className="text-gray-500 text-sm mt-1">Opened offices in London, Singapore, and Berlin to support our enterprise clients' global workforce needs.</p>
                     </div>
                     <div className="relative">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-gray-50"></span>
                        <h4 className="font-bold text-primary text-lg">Today: Market Leaders</h4>
                        <p className="text-gray-500 text-sm mt-1">Recognized as a Top 10 Executive Search Firm, serving 50% of the Fortune 100.</p>
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                     <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-lg mt-8" alt="Office Culture" />
                     <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-lg" alt="Meeting" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Global Footprint (Map Placeholder) */}
      <section className="py-24 bg-[#0A2540] text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center opacity-10 scale-125"></div>
         <div className="container relative z-10 mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Talent Knows No Borders</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-16">
               With hubs in major economic centers, we offer 24/7 recruiting cycles. We don't just find local talent; we find the best talent, period.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                  { city: "San Francisco", region: "HQ • Americas" },
                  { city: "New York", region: "Americas" },
                  { city: "London", region: "EMEA" },
                  { city: "Berlin", region: "EMEA" },
                  { city: "Singapore", region: "APAC" },
                  { city: "Sydney", region: "APAC" },
                  { city: "Toronto", region: "Americas" },
                  { city: "Dubai", region: "MENA" },
               ].map((loc, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                     <div className="w-2 h-2 bg-secondary rounded-full mb-3 mx-auto shadow-[0_0_10px_rgba(0,208,132,0.8)]"></div>
                     <h4 className="font-bold text-lg">{loc.city}</h4>
                     <p className="text-xs text-gray-400 uppercase mt-1">{loc.region}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Values & Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest">Our DNA</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">Driven by Purpose, <br/>Defined by Integrity.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Radical Transparency', icon: 'fa-search', desc: 'We share the bad news as fast as the good news. No hidden fees, no ghosting, no ambiguity.' },
              { title: 'The Long Game', icon: 'fa-chess-queen', desc: 'We would rather lose a placement than make a bad match. We build relationships for decades, not quarters.' },
              { title: 'Data + Instinct', icon: 'fa-brain', desc: 'We leverage AI for speed, but rely on human emotional intelligence for the final 10% that matters most.' },
            ].map((val, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <i className={`fas ${val.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{val.title}</h3>
                <p className="text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leadership Team */}
      <section className="py-24 bg-light border-t border-gray-200">
         <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-2">Meet the Partners</h2>
                  <p className="text-gray-500">Decades of combined experience in Executive Search & Tech.</p>
               </div>
               <button className="hidden md:block text-primary font-bold hover:text-secondary">
                  Join Our Team <i className="fas fa-arrow-right ml-2"></i>
               </button>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
               {TEAM.map((member, idx) => (
                 <div key={idx} className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all">
                    <div className="aspect-[3/4] overflow-hidden">
                       <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" />
                    </div>
                    <div className="p-6 relative bg-white">
                       <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{member.name}</h3>
                       <p className="text-xs font-bold text-gray-400 uppercase mb-3">{member.role}</p>
                       <p className="text-sm text-gray-500 line-clamp-2 mb-4">{member.bio}</p>
                       <div className="flex gap-3">
                          <a href="#" className="text-gray-400 hover:text-[#0077b5]"><i className="fab fa-linkedin text-lg"></i></a>
                          <a href="#" className="text-gray-400 hover:text-primary"><i className="fas fa-envelope text-lg"></i></a>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Impact & CSR */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="bg-[#00D084]/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <div className="inline-block px-3 py-1 bg-white rounded-full text-secondary text-xs font-bold uppercase mb-4">Impact Initiative</div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">Changing the Face of Leadership.</h2>
                  <p className="text-gray-700 text-lg mb-6">
                     We are committed to building diverse, inclusive teams. Last year, 54% of our executive placements were from underrepresented groups.
                  </p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center gap-3 font-bold text-primary">
                        <i className="fas fa-check-circle text-secondary"></i> founding Partner of "Tech for All"
                     </li>
                     <li className="flex items-center gap-3 font-bold text-primary">
                        <i className="fas fa-check-circle text-secondary"></i> Blind Resume Screening Standard
                     </li>
                     <li className="flex items-center gap-3 font-bold text-primary">
                        <i className="fas fa-check-circle text-secondary"></i> 1% of Profits Donated to STEM Education
                     </li>
                  </ul>
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded hover:bg-opacity-90 transition-opacity">
                     Read Our Impact Report
                  </button>
               </div>
               <div className="md:w-1/2 relative">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <div className="text-3xl font-bold text-primary mb-1">54%</div>
                        <div className="text-xs text-gray-500 uppercase">Diverse Placements</div>
                     </div>
                     <div className="bg-white p-6 rounded-2xl shadow-sm text-center translate-y-8">
                        <div className="text-3xl font-bold text-primary mb-1">$2M</div>
                        <div className="text-xs text-gray-500 uppercase">Scholarships Funded</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
