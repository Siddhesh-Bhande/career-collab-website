
import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { BlogPost } from '../../types';

const AdminContent: React.FC = () => {
  const { blogPosts, addBlogPost, deleteBlogPost } = useData();
  const [activeTab, setActiveTab] = useState<'blogs' | 'case-studies'>('blogs');
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '', excerpt: '', category: 'Hiring Trends', image: 'https://picsum.photos/800/600'
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    addBlogPost({
      id: Date.now().toString(),
      title: newPost.title!,
      excerpt: newPost.excerpt!,
      category: activeTab === 'case-studies' ? 'Case Study' : newPost.category!,
      image: newPost.image!,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
    setIsEditorOpen(false);
    setNewPost({ title: '', excerpt: '', category: 'Hiring Trends', image: 'https://picsum.photos/800/600' });
  };

  const filteredPosts = blogPosts.filter(p => 
    activeTab === 'case-studies' ? p.category === 'Case Study' : p.category !== 'Case Study'
  );

  return (
    <div className="animate-fade-in-up">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#0A2540]">Content Management</h1>
          <p className="text-gray-500 text-sm">Manage website blogs and case studies</p>
        </div>
        <button 
          onClick={() => setIsEditorOpen(true)}
          className="bg-[#0A2540] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#00D084] hover:text-[#0A2540] transition-colors shadow-lg"
        >
          <i className="fas fa-plus mr-2"></i> Create New
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button 
          onClick={() => setActiveTab('blogs')}
          className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'blogs' ? 'border-[#00D084] text-[#0A2540]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
        >
          Blog Articles
        </button>
        <button 
           onClick={() => setActiveTab('case-studies')}
           className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'case-studies' ? 'border-[#00D084] text-[#0A2540]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
        >
          Case Studies
        </button>
      </div>

      {/* Editor Modal (Inline) */}
      {isEditorOpen && (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8 animate-fade-in-down">
          <h3 className="font-bold text-lg mb-4">Create New {activeTab === 'blogs' ? 'Article' : 'Case Study'}</h3>
          <form onSubmit={handleSave} className="space-y-4">
             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Title</label>
                <input type="text" className="w-full border p-2 rounded" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} required />
             </div>
             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Excerpt</label>
                <textarea className="w-full border p-2 rounded" rows={3} value={newPost.excerpt} onChange={e => setNewPost({...newPost, excerpt: e.target.value})} required></textarea>
             </div>
             {activeTab === 'blogs' && (
               <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
                  <select className="w-full border p-2 rounded" value={newPost.category} onChange={e => setNewPost({...newPost, category: e.target.value})}>
                     <option>Hiring Trends</option>
                     <option>Interview Tips</option>
                     <option>Company Culture</option>
                  </select>
               </div>
             )}
             <div className="flex gap-4">
                <button className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600">Publish</button>
                <button type="button" onClick={() => setIsEditorOpen(false)} className="bg-gray-200 text-gray-600 font-bold py-2 px-6 rounded hover:bg-gray-300">Cancel</button>
             </div>
          </form>
        </div>
      )}

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
             <div className="h-40 overflow-hidden relative">
               <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded shadow-sm">
                 {post.date}
               </div>
             </div>
             <div className="p-6">
               <span className="text-[10px] font-bold text-[#00D084] uppercase tracking-wider">{post.category}</span>
               <h3 className="font-bold text-[#0A2540] text-lg mb-2 mt-1 leading-tight">{post.title}</h3>
               <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
               <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <button className="text-sm font-bold text-[#0A2540] hover:text-[#00D084]">Edit</button>
                  <button onClick={() => deleteBlogPost(post.id)} className="text-sm font-bold text-red-400 hover:text-red-600">Delete</button>
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminContent;
