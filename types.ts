
export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  category: string;
  postedAt: string;
  description?: string;
  applicants?: number;
  status?: 'Active' | 'Closed' | 'Draft';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  image: string;
  date: string;
  status?: 'Published' | 'Draft';
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

// CRM Specific Types
export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  resumeUrl: string;
  status: 'New' | 'Screening' | 'Interview' | 'Offer' | 'Hired' | 'Rejected';
  notes: string;
  appliedDate: string;
  rating: number; // 1-5 stars
}

export interface Employer {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  industry: string;
  status: 'Lead' | 'Active' | 'Churned';
  dealValue: string;
  lastContact: string;
  activeRoles: number;
}
