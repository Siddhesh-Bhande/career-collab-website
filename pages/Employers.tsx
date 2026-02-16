
import React, { useState } from 'react';
import { COMPANY_LOGOS, EMPLOYER_FAQS, SERVICES } from '../constants';

// Extended data for the interactive services section
const SERVICE_DETAILS: Record<string, { benefits: string[], caseStudy: { title: string, result: string } }> = {
  "Executive Search": {
    benefits: [
      "Access to the 'Hidden' Candidate Market (85% passive)",
      "Dedicated Research Team for market mapping",
      "Confidential outreach to competitor leadership",
      "12-Month Replacement Guarantee"
    ],
    caseStudy: {
      title: "Confidential CTO Search for Fintech Unicorn",
      result: "Placed a former PayPal VP in 34 days. The candidate was not actively looking but was engaged via our targeted discreet outreach."
    }
  },
  "Staff Augmentation": {
    benefits: [
      "Deploy top 1% tech talent in < 48 hours",
      "Flexible contracts (3, 6, 12 months)",
      "We handle payroll, benefits, and equipment",
      "Seamless integration with your agile teams"
    ],
    caseStudy: {
      title: "React Native Team for Product Launch",
      result: "Deployed 8 Senior Mobile Engineers in 1 week to help a HealthTech client hit a critical launch deadline. Saved $200k in recruitment fees."
    }
  },
  "RPO Solutions": {
    benefits: [
      "End-to-end management of your talent function",
      "Scalable recruiting resources on-demand",
      "Employer Branding & Career Page optimization",
      "Cost-per-hire reduction averaging 40%"
    ],
    caseStudy: {
      title: "Scaling Engineering from 20 to 100",
      result: "Partnered with a Series B SaaS to hire 80 engineers in 9 months. Reduced agency spend by 65% and improved offer acceptance rate to 92%."
    }
  },
  "Market Intelligence": {
    benefits: [
      "Real-time salary & equity benchmarking",
      "Competitor organizational chart mapping",
      "Talent density heatmaps by location",
      "Diversity & Inclusion metrics analysis"
    ],
    caseStudy: {
      title: "Remote Hub Location Analysis",
      result: "Advised a US client to build their hub in Lisbon vs. London, saving $1.5M in annual opex while maintaining time-zone alignment."
    }
  },
  "Global Expansion": {
    benefits: [
      "Employer of Record (EOR) services in 100+ countries",
      "Local labor law compliance & contract management",
      "International benefits administration",
      "Visa & Relocation support"
    ],
    caseStudy: {
      title: "EMEA Expansion for US Tech Giant",
      result: "Enabled a San Francisco based AI firm to hire their first 15 employees across Germany, UK, and France without establishing legal entities."
    }
  },
  "Interim Leadership": {
    benefits: [
      "Immediate placement of C-Suite/VP leaders",
      "Crisis management & Turnaround expertise",
      "Merger & Acquisition integration support",
      "Gap coverage during retained searches"
    ],
    caseStudy: {
      title: "Interim CFO for M&A Deal",
      result: "Placed an interim CFO to guide a logistics company through a $500M acquisition. The deal closed 2 weeks ahead of schedule."
    }
  }
};

const Employers: React.FC = () => {
  // Calculator State
  const [revenue, setRevenue] = useState<number>(5000000);
  const [employees, setEmployees] = useState<number>(25);
  const [daysOpen, setDaysOpen] = useState<number>(45);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  // Interactive Services State
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  const revenuePerEmployee = revenue / employees;
  const dailyRevenue = revenuePerEmployee / 260; // 260 working days
  const costOfVacancy = Math.round(dailyRevenue * daysOpen * 1.5); // 1.5x multiplier for impact

  // Toggle FAQ
  const toggleFaq = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  const activeService = SERVICES[activeServiceIdx];
  const activeDetails = SERVICE_DETAILS[activeService.title];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Corporate Architecture" className="w-full h-full object-cover opacity-10" />
           <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/80"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
             <span className="text-secondary font-bold text-xs uppercase tracking-widest">For Enterprise & Growth Companies</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-8 tracking-tight">
            World-Class Teams <br/> Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-emerald-300">Built, Not Found.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            We deploy algorithmic sourcing, rigorous behavioral vetting, and strategic workforce planning to secure top 1% talent for your critical roles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
             <button className="px-8 py-4 bg-secondary text-primary font-bold rounded hover:bg-white transition-all shadow-[0_0_20px_rgba(0,208,132,0.3)]">
               Schedule Strategy Call
             </button>
             <button className="px-8 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors">
               View Case Studies
             </button>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-primary border-t border-white/10 py-10">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
               <div>
                  <div className="text-3xl font-heading font-bold text-white mb-1">98%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Retention Rate (12mo)</div>
               </div>
               <div>
                  <div className="text-3xl font-heading font-bold text-white mb-1">14 Days</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Avg Time to Hire</div>
               </div>
               <div>
                  <div className="text-3xl font-heading font-bold text-white mb-1">3:1</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Interview to Offer</div>
               </div>
               <div>
                  <div className="text-3xl font-heading font-bold text-white mb-1">90 Days</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Replacement Guarantee</div>
               </div>
            </div>
         </div>
      </div>

      {/* NEW SECTION 1: THE TALENT RADAR (Secret Sauce) */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-1/2 relative">
                  {/* Visual representation of "Hidden Market" */}
                  <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                     <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400"><i className="fas fa-users"></i></div>
                        <div>
                           <h4 className="font-bold text-gray-400">Public Job Boards</h4>
                           <p className="text-xs text-gray-400">Active Candidates (15% of market)</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 bg-primary/5 p-4 rounded-xl border border-primary/10">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg"><i className="fas fa-radar"></i></div>
                        <div>
                           <h4 className="font-bold text-primary">Career Collab Network</h4>
                           <p className="text-xs text-gray-600 font-bold">Passive Candidates (85% of market)</p>
                        </div>
                        <span className="ml-auto text-xs font-bold bg-secondary/20 text-emerald-700 px-2 py-1 rounded">Exclusive</span>
                     </div>
                  </div>
                  {/* Decor elements */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-secondary/5 rounded-full blur-3xl -z-0"></div>
               </div>
               
               <div className="lg:w-1/2">
                  <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-2 block">The Hidden Job Market</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">We Find the Talent <br/>That Isn't Looking.</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                     The best people are already employed and performing at a high level. They aren't scrolling job boards. We use proprietary AI mapping and discreet headhunting to penetrate this passive market.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-4">
                        <i className="fas fa-check-circle text-secondary text-xl mt-1"></i>
                        <div>
                           <h4 className="font-bold text-primary">Algorithmic Sourcing</h4>
                           <p className="text-sm text-gray-500">Our tech stack scans GitHub, StackOverflow, and patent databases to identify top performers before they update their LinkedIn.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <i className="fas fa-check-circle text-secondary text-xl mt-1"></i>
                        <div>
                           <h4 className="font-bold text-primary">Discreet Activation</h4>
                           <p className="text-sm text-gray-500">We approach candidates with a tailored narrative about your company's vision, converting them from "happy" to "intrigued."</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* NEW INTERACTIVE SERVICES GRID (Replaces Tabs) */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-heading font-bold text-primary mb-4">Comprehensive Workforce Solutions</h2>
               <p className="text-gray-500 max-w-2xl mx-auto">
                 We are more than just recruiters. We are your strategic talent partners, offering a full spectrum of services to support your growth at every stage.
               </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-stretch h-full">
               
               {/* Left Column: Service Selection Grid */}
               <div className="lg:w-1/3 grid grid-cols-1 gap-4">
                  {SERVICES.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveServiceIdx(idx)}
                      className={`text-left p-6 rounded-xl border transition-all duration-300 flex items-center gap-4 group ${
                        idx === activeServiceIdx 
                          ? 'bg-white border-secondary shadow-lg scale-105 z-10' 
                          : 'bg-white border-transparent hover:border-gray-200 hover:shadow-md opacity-80 hover:opacity-100'
                      }`}
                    >
                       <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl transition-colors ${
                         idx === activeServiceIdx ? 'bg-secondary text-primary' : 'bg-gray-100 text-gray-400 group-hover:bg-primary/5 group-hover:text-primary'
                       }`}>
                          <i className={`fas ${service.icon}`}></i>
                       </div>
                       <div>
                          <h4 className={`font-bold transition-colors ${idx === activeServiceIdx ? 'text-primary' : 'text-gray-600'}`}>{service.title}</h4>
                       </div>
                       {idx === activeServiceIdx && (
                          <i className="fas fa-chevron-right ml-auto text-secondary"></i>
                       )}
                    </button>
                  ))}
               </div>

               {/* Right Column: Active Service Details */}
               <div className="lg:w-2/3">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 h-full overflow-hidden flex flex-col relative animate-fade-in-up">
                      {/* Header */}
                      <div className="bg-primary text-white p-10">
                         <div className="flex items-start justify-between mb-4">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary text-3xl">
                               <i className={`fas ${activeService.icon}`}></i>
                            </div>
                            <span className="bg-secondary/20 text-secondary text-xs font-bold uppercase px-3 py-1 rounded-full">
                              Core Capability
                            </span>
                         </div>
                         <h3 className="text-3xl font-heading font-bold mb-2">{activeService.title}</h3>
                         <p className="text-gray-300 text-lg leading-relaxed">{activeService.description}</p>
                      </div>
                      
                      {/* Body */}
                      <div className="p-10 flex-grow flex flex-col md:flex-row gap-12">
                         <div className="md:w-1/2">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Key Benefits</h4>
                            <ul className="space-y-4">
                               {activeDetails?.benefits.map((benefit, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                 </li>
                               ))}
                            </ul>
                            <button className="mt-8 text-primary font-bold border-b-2 border-secondary pb-0.5 hover:text-secondary transition-colors">
                               Download Service Brief <i className="fas fa-download ml-2"></i>
                            </button>
                         </div>

                         <div className="md:w-1/2">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 h-full">
                               <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                                 <i className="fas fa-book-open"></i> Real World Impact
                               </h4>
                               <h5 className="font-bold text-lg text-primary mb-2">"{activeDetails?.caseStudy.title}"</h5>
                               <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
                                 {activeDetails?.caseStudy.result}
                               </p>
                               <div className="flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 w-fit px-2 py-1 rounded">
                                  <i className="fas fa-chart-line"></i> Proven ROI
                               </div>
                            </div>
                         </div>
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* NEW SECTION 2: COMPLIANCE & RISK (Trust/Enterprise) */}
      <section className="py-20 bg-[#0A2540] text-white">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="md:w-1/2">
                  <h2 className="text-3xl font-heading font-bold mb-4">Enterprise-Grade Compliance</h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                     Hiring is risky. We mitigate that risk. From diverse slate requirements to international EOR (Employer of Record) services, we handle the complexity so you can focus on growth.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="flex items-center gap-3">
                        <i className="fas fa-shield-alt text-secondary text-2xl"></i>
                        <span className="font-bold">GDPR Compliant</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <i className="fas fa-file-contract text-secondary text-2xl"></i>
                        <span className="font-bold">ISO 27001 Certified</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <i className="fas fa-globe text-secondary text-2xl"></i>
                        <span className="font-bold">Global EOR Support</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <i className="fas fa-balance-scale text-secondary text-2xl"></i>
                        <span className="font-bold">DEI Reporting</span>
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2 flex justify-center">
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                           <i className="fas fa-check"></i>
                        </div>
                        <div>
                           <h4 className="font-bold">Audit-Ready Process</h4>
                           <p className="text-xs text-gray-400">All vetting logs are immutable</p>
                        </div>
                     </div>
                     <div className="h-2 bg-white/10 rounded-full w-64 mb-4 overflow-hidden">
                        <div className="h-full bg-secondary w-3/4"></div>
                     </div>
                     <p className="text-xs text-gray-400">Risk Mitigation Score: 98/100</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* The Velocity Framework (Process) */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-heading font-bold text-primary mb-4">The Velocity™ Framework</h2>
               <p className="text-gray-500">Our proprietary methodology for reducing risk and increasing speed.</p>
            </div>
            
            <div className="relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
               
               <div className="grid md:grid-cols-4 gap-8 relative z-10">
                  {[
                     { step: "01", title: "Calibration", desc: "We build a 360° profile of your ideal candidate, including technical skills and cultural DNA." },
                     { step: "02", title: "Sourcing", desc: "Our AI scans 100M+ profiles while our headhunters activate their private networks." },
                     { step: "03", title: "Vetting", desc: "Rigorous technical challenges and behavioral interviews. We reject 95% of candidates." },
                     { step: "04", title: "Closing", desc: "We manage the offer, negotiation, and resignation process to ensure a smooth start." }
                  ].map((stage, idx) => (
                     <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 ring-4 ring-white">
                           {stage.step}
                        </div>
                        <h4 className="font-bold text-primary text-lg mb-2">{stage.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{stage.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* NEW SECTION 3: DETAILED CASE STUDY STRIP (ROI/Social Proof) */}
      <section className="py-24 bg-light border-y border-gray-200">
         <div className="container mx-auto px-6">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-heading font-bold text-primary">Proven ROI</h2>
               <p className="text-gray-500">Numbers don't lie. See how we deliver value.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="text-xs font-bold text-gray-400 uppercase mb-2">Fintech • Series B</div>
                  <h3 className="font-bold text-primary text-xl mb-4">Scaling Engineering from 10 to 50</h3>
                  <div className="space-y-3 mb-6">
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Timeframe:</span>
                        <span className="font-bold text-primary">4 Months</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Cost Saving:</span>
                        <span className="font-bold text-green-600">$450k (vs Agency fees)</span>
                     </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"Career Collab acted as our internal team. They understood our stack and culture instantly."</p>
               </div>
               
               <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
                  <div className="text-xs font-bold text-gray-400 uppercase mb-2">HealthTech • Enterprise</div>
                  <h3 className="font-bold text-primary text-xl mb-4">Confidential CTO Search</h3>
                  <div className="space-y-3 mb-6">
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Candidates Vetted:</span>
                        <span className="font-bold text-primary">124</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Shortlist:</span>
                        <span className="font-bold text-primary">3 Elite Profiles</span>
                     </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"Discretion was paramount. They delivered a world-class CTO without leaking the search."</p>
               </div>

               <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
                  <div className="text-xs font-bold text-gray-400 uppercase mb-2">SaaS • Pre-IPO</div>
                  <h3 className="font-bold text-primary text-xl mb-4">VP of Sales & Revenue Team</h3>
                  <div className="space-y-3 mb-6">
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Revenue Impact:</span>
                        <span className="font-bold text-green-600">+$12M ARR</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Hires:</span>
                        <span className="font-bold text-primary">1 VP + 6 AEs</span>
                     </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"The team they built hit 120% of quota in their first quarter. Absolute game changer."</p>
               </div>
            </div>
         </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold uppercase mb-4">Financial Impact</div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">The True Cost of a Vacancy</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Every day a key role remains open, your company loses revenue, productivity, and momentum. Use our calculator to quantify the business case for using an agency.
                </p>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                   <h4 className="font-bold text-primary mb-2">Did you know?</h4>
                   <p className="text-sm text-gray-500">
                      The average time-to-fill for a technical role in the US is 45 days. Career Collab reduces this to 14 days, potentially saving you <span className="text-primary font-bold">thousands</span> in lost productivity.
                   </p>
                </div>
             </div>

             <div className="lg:w-1/2 w-full">
                <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                   <h3 className="font-bold text-primary text-xl mb-6 border-b border-gray-100 pb-4">Vacancy Loss Calculator</h3>
                   
                   <div className="space-y-8">
                     <div>
                       <div className="flex justify-between mb-2">
                          <label className="text-xs font-bold text-gray-500 uppercase">Annual Revenue</label>
                          <span className="text-sm font-bold text-primary">${revenue.toLocaleString()}</span>
                       </div>
                       <input 
                         type="range" 
                         min="1000000" 
                         max="50000000" 
                         step="500000"
                         value={revenue} 
                         onChange={(e) => setRevenue(Number(e.target.value))}
                         className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                       />
                     </div>
                     
                     <div>
                       <div className="flex justify-between mb-2">
                          <label className="text-xs font-bold text-gray-500 uppercase">Total Employees</label>
                          <span className="text-sm font-bold text-primary">{employees}</span>
                       </div>
                       <input 
                         type="range" 
                         min="5" 
                         max="500" 
                         value={employees} 
                         onChange={(e) => setEmployees(Number(e.target.value))}
                         className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                       />
                     </div>

                     <div>
                       <div className="flex justify-between mb-2">
                          <label className="text-xs font-bold text-gray-500 uppercase">Days Open</label>
                          <span className="text-sm font-bold text-primary">{daysOpen} Days</span>
                       </div>
                       <input 
                         type="range" 
                         min="1" 
                         max="120" 
                         value={daysOpen} 
                         onChange={(e) => setDaysOpen(Number(e.target.value))}
                         className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                       />
                     </div>
                   </div>

                   <div className="mt-10 bg-primary rounded-xl p-6 text-center text-white relative overflow-hidden">
                      <div className="relative z-10">
                         <p className="text-gray-300 text-xs uppercase tracking-widest mb-2">Estimated Revenue Loss</p>
                         <p className="text-4xl font-heading font-extrabold text-white">
                           ${costOfVacancy.toLocaleString()}
                         </p>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-6">
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">Deep Sector Expertise In</p>
            <div className="flex flex-wrap justify-center gap-4">
               {['FinTech', 'SaaS', 'HealthTech', 'E-Commerce', 'Logistics', 'Cybersecurity', 'AI & ML', 'Biotech'].map((ind) => (
                 <span key={ind} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-600 font-bold hover:border-secondary hover:text-secondary transition-colors cursor-default shadow-sm">
                    {ind}
                 </span>
               ))}
            </div>
            
            <div className="mt-16 flex justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex gap-12 overflow-hidden">
                  {COMPANY_LOGOS.map((logo, idx) => (
                     <span key={idx} className="text-xl font-bold font-heading">{logo}</span>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-heading font-bold text-primary">Common Questions</h2>
            </div>
            <div className="space-y-4">
               {EMPLOYER_FAQS.map((faq, idx) => (
                 <div key={idx} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                    >
                       <span className={`font-bold text-lg ${faqOpenIndex === idx ? 'text-primary' : 'text-gray-700'}`}>
                         {faq.question}
                       </span>
                       <i className={`fas fa-plus transition-transform duration-300 text-secondary ${faqOpenIndex === idx ? 'transform rotate-45' : ''}`}></i>
                    </button>
                    <div className={`px-6 overflow-hidden transition-all duration-300 ${faqOpenIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                       <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Split Layout Form Section - Redesigned */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Content */}
            <div className="lg:w-1/2 py-20 lg:py-24 lg:pr-16">
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <h2 className="text-4xl font-heading font-bold mb-6">Let's solve your hiring challenges.</h2>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                Connect with our specialized consultants to discuss your specific needs. We generally respond within 2 hours during business days.
              </p>
              
              <div className="space-y-8">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0">
                       <i className="fas fa-database"></i>
                    </div>
                    <div>
                       <h4 className="font-bold text-lg">Exclusive Talent Pool</h4>
                       <p className="text-gray-400 text-sm">Access 50,000+ pre-vetted candidates not on LinkedIn.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0">
                       <i className="fas fa-shield-alt"></i>
                    </div>
                    <div>
                       <h4 className="font-bold text-lg">Replacement Guarantee</h4>
                       <p className="text-gray-400 text-sm">We de-risk your hiring with our 90-day guarantee.</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Form - "Floating" look */}
            <div className="lg:w-1/2 bg-white text-gray-800 p-10 lg:p-20 relative lg:-my-10 lg:rounded-l-none lg:rounded-r-none rounded-t-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Request a Consultation</h3>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Company Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:outline-none transition-colors" placeholder="Acme Inc." />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Contact Person</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:outline-none transition-colors" placeholder="John Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Work Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:outline-none transition-colors" placeholder="john@acme.com" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Hiring Needs</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:outline-none transition-colors">
                    <option>Information Technology</option>
                    <option>Sales & Marketing</option>
                    <option>Executive Leadership</option>
                    <option>Finance & Operations</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:bg-white focus:border-secondary focus:outline-none transition-colors" placeholder="Tell us about the roles you need to fill..."></textarea>
                </div>

                <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-[#0f3459] transition-colors shadow-lg mt-2">
                  Request Consultation
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Employers;
