
import React from 'react';
import { useData } from '../context/DataContext';

const Blog: React.FC = () => {
  const { blogPosts } = useData();

  return (
    <div className="pt-20">
      <section className="bg-light py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Success Stories & Insights</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Read about how we're shaping the future of work, one placement at a time.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Main Content - Blog Grid */}
            <div className="md:col-span-2 grid gap-10">
              {blogPosts.map((post) => (
                <article key={post.id} className="flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-secondary text-xs font-bold uppercase tracking-wider">{post.category}</span>
                      <span className="text-gray-400 text-xs">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-3 hover:text-secondary cursor-pointer transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <a href="#" className="text-primary font-bold text-sm hover:text-secondary inline-flex items-center gap-1">
                      Read Case Study <i className="fas fa-arrow-right text-xs"></i>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Category Widget */}
              <div className="bg-light p-6 rounded-lg">
                <h4 className="font-heading font-bold text-primary mb-4 border-b border-gray-200 pb-2">Categories</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex justify-between hover:text-secondary cursor-pointer">
                    <span>Hiring Trends</span> <span className="text-gray-400">(12)</span>
                  </li>
                  <li className="flex justify-between hover:text-secondary cursor-pointer">
                    <span>Case Studies</span> <span className="text-gray-400">(8)</span>
                  </li>
                  <li className="flex justify-between hover:text-secondary cursor-pointer">
                    <span>Interview Tips</span> <span className="text-gray-400">(24)</span>
                  </li>
                  <li className="flex justify-between hover:text-secondary cursor-pointer">
                    <span>Company Culture</span> <span className="text-gray-400">(5)</span>
                  </li>
                </ul>
              </div>

              {/* CTA Widget */}
              <div className="bg-primary p-8 rounded-lg text-white text-center">
                <h4 className="font-heading font-bold text-xl mb-4">Looking for Talent?</h4>
                <p className="text-sm text-gray-300 mb-6">
                  We have the network you need to scale your team.
                </p>
                <button className="w-full bg-secondary text-primary font-bold py-3 rounded hover:bg-white transition-colors">
                  Contact Us
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
