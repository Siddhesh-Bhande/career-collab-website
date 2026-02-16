import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col lg:flex-row">
        
        {/* Left Side - Info */}
        <div className="lg:w-1/2 bg-primary text-white p-12 lg:p-20 flex flex-col justify-center">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">We'd love to hear from you.</h1>
          
          <div className="space-y-8 text-lg">
             <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt mt-1 text-secondary"></i>
                <div>
                  <p className="font-bold">Headquarters</p>
                  <p className="text-gray-300">100 Innovation Drive, Suite 500<br/>San Francisco, CA 94105</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <i className="fas fa-envelope text-secondary"></i>
                <a href="mailto:hello@careercollab.com" className="text-gray-300 hover:text-white transition-colors">hello@careercollab.com</a>
             </div>
             <div className="flex items-center gap-4">
                <i className="fas fa-phone text-secondary"></i>
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors">+1 (555) 123-4567</a>
             </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
             <p className="text-gray-400 text-sm mb-4">Connect on Social</p>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"><i className="fab fa-twitter"></i></a>
             </div>
          </div>
        </div>

        {/* Right Side - Map & Form */}
        <div className="lg:w-1/2 bg-gray-50 p-12 lg:p-20">
           <form className="bg-white p-8 rounded-xl shadow-lg" onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
             <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
             <div className="grid md:grid-cols-2 gap-4 mb-4">
               <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">First Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded p-3 focus:border-secondary focus:outline-none" />
               </div>
               <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Last Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded p-3 focus:border-secondary focus:outline-none" />
               </div>
             </div>
             <div className="mb-4">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
                <input type="email" className="w-full border border-gray-200 rounded p-3 focus:border-secondary focus:outline-none" />
             </div>
             <div className="mb-6">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Message</label>
                <textarea rows={5} className="w-full border border-gray-200 rounded p-3 focus:border-secondary focus:outline-none"></textarea>
             </div>
             <button className="w-full bg-primary text-white font-bold py-4 rounded hover:bg-[#0f3459] transition-colors">
               Send Message
             </button>
           </form>
           
           <div className="mt-10 h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner">
              {/* Mock Map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017946304!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1634606756286!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy">
              </iframe>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;