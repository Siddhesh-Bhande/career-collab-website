import { Job, BlogPost, Service, TeamMember, Stat, Testimonial } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior React Engineer',
    location: 'Remote (US)',
    type: 'Full-Time',
    salary: '$140k - $180k',
    category: 'Engineering',
    postedAt: '2 days ago'
  },
  {
    id: '2',
    title: 'Product Marketing Manager',
    location: 'New York, NY',
    type: 'Full-Time',
    salary: '$110k - $150k',
    category: 'Marketing',
    postedAt: '4 days ago'
  },
  {
    id: '3',
    title: 'VP of Engineering',
    location: 'San Francisco, CA',
    type: 'Full-Time',
    salary: '$220k - $300k',
    category: 'Executive',
    postedAt: '1 week ago'
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    location: 'Austin, TX',
    type: 'Contract',
    salary: '$80/hr',
    category: 'Design',
    postedAt: '1 week ago'
  },
  {
    id: '5',
    title: 'Chief Financial Officer',
    location: 'Chicago, IL',
    type: 'Retained Search',
    salary: '$350k - $450k',
    category: 'Executive',
    postedAt: '1 day ago'
  },
  {
    id: '6',
    title: 'AI Research Scientist',
    location: 'Boston, MA',
    type: 'Full-Time',
    salary: '$200k - $280k',
    category: 'Engineering',
    postedAt: '3 days ago'
  },
  {
    id: '7',
    title: 'Enterprise Account Executive',
    location: 'Remote (West Coast)',
    type: 'Full-Time',
    salary: '$150k + Commission',
    category: 'Sales',
    postedAt: '5 hours ago'
  },
  {
    id: '8',
    title: 'DevOps Lead',
    location: 'Seattle, WA',
    type: 'Contract',
    salary: '$110/hr',
    category: 'Engineering',
    postedAt: '2 days ago'
  },
  {
    id: '9',
    title: 'Head of People',
    location: 'Austin, TX',
    type: 'Full-Time',
    salary: '$180k - $220k',
    category: 'HR',
    postedAt: '1 week ago'
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How We Helped a Fintech Startup Scale from 10 to 50 Employees',
    excerpt: 'Scaling a team requires more than just headcount. It requires culture alignment and rigorous vetting. Here is how we did it.',
    category: 'Case Study',
    image: 'https://picsum.photos/800/600?random=1',
    date: 'Oct 12, 2023'
  },
  {
    id: '2',
    title: 'Top 5 Hiring Trends for 2024 You Cannot Ignore',
    excerpt: 'From AI-driven recruitment to the permanent shift to hybrid work, here are the trends defining the next year.',
    category: 'Hiring Trends',
    image: 'https://picsum.photos/800/600?random=2',
    date: 'Nov 05, 2023'
  },
  {
    id: '3',
    title: 'Mastering the Executive Interview',
    excerpt: 'For C-suite roles, technical skills are baseline. The interview is about vision, leadership, and emotional intelligence.',
    category: 'Interview Tips',
    image: 'https://picsum.photos/800/600?random=3',
    date: 'Nov 20, 2023'
  }
];

export const SERVICES: Service[] = [
  {
    icon: 'fa-user-tie',
    title: 'Executive Search',
    description: 'Specialized headhunting for C-suite and VP-level leadership roles where discretion and network are paramount.',
  },
  {
    icon: 'fa-users',
    title: 'Staff Augmentation',
    description: 'Flexible, high-quality contract talent to boost your team capacity for critical short-term projects.',
  },
  {
    icon: 'fa-handshake',
    title: 'RPO Solutions',
    description: 'Recruitment Process Outsourcing. We embed ourselves as your internal HR department to manage high-volume hiring.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Market Intelligence',
    description: 'Custom salary benchmarking and talent mapping reports to keep you competitive in a volatile market.',
  },
  {
    icon: 'fa-globe',
    title: 'Global Expansion',
    description: 'Helping US-based companies build remote teams in LATAM and EMEA with full compliance handling.',
  },
  {
    icon: 'fa-chess-knight',
    title: 'Interim Leadership',
    description: 'Placement of interim CEOs, CFOs, and CTOs to guide companies through transitions or crises.',
  }
];

export const COMPANY_LOGOS = [
  "Microsoft", "Adobe", "Slack", "Spotify", "Airbnb", "Salesforce", "Oracle", "Stripe"
];

export const TEAM: TeamMember[] = [
  {
    name: "Alex Mercer",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Former VP of Talent at Fortune 500s. Expert in scaling executive teams.",
    linkedin: "#"
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Tech Recruitment",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Specializes in AI/ML and Engineering leadership placements.",
    linkedin: "#"
  },
  {
    name: "Marcus Chen",
    role: "Director of RPO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Managed 10,000+ hires for global logistics and manufacturing firms.",
    linkedin: "#"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Diversity & Inclusion",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Ensures equitable hiring practices and builds diverse talent pipelines.",
    linkedin: "#"
  }
];

export const STATS: Stat[] = [
  { label: "Placements This Year", value: "1,240+", icon: "fa-check-circle" },
  { label: "Executive Retention Rate", value: "98%", icon: "fa-user-shield" },
  { label: "Average Time to Fill", value: "14 Days", icon: "fa-stopwatch" },
  { label: "Salary Negotiated", value: "$450M+", icon: "fa-money-bill-wave" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Career Collab didn't just send resumes; they understood our culture better than we did. The VP of Engineering they placed transformed our product roadmap in 3 months.",
    author: "James Thorne",
    role: "CEO",
    company: "FinTech Sol",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "I've worked with dozens of agencies, but none have the speed and precision of this team. Their interim CFO saved us during a critical merger.",
    author: "Amanda Li",
    role: "Board Member",
    company: "Global Logistics",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "As a candidate, I felt treated with dignity. They prepared me for every stage of the interview and negotiated a compensation package 20% higher than my target.",
    author: "David Ross",
    role: "Sr. Director of Sales",
    company: "Placed Candidate",
    image: "https://randomuser.me/api/portraits/men/85.jpg"
  }
];

export const CANDIDATE_FAQS = [
  {
    question: "Do I have to pay for your services?",
    answer: "Never. Our services are 100% free for candidates. We are retained by the employer to find top talent. Our goal is to place you in a role where you thrive."
  },
  {
    question: "Will my current employer know I'm looking?",
    answer: "Absolutely not. Confidentiality is our cornerstone. We obtain your express permission before submitting your profile to any company, and we never post your resume on public boards."
  },
  {
    question: "How does the salary negotiation process work?",
    answer: "We handle it for you. Because we know the client's budget and market rates, we typically secure offers 15-20% higher than candidates negotiating alone."
  },
  {
    question: "What types of roles do you place?",
    answer: "We focus on mid-to-senior level positions in Technology, Finance, Marketing, and Executive Leadership. Most roles are $100k+."
  },
  {
    question: "How long does the process take?",
    answer: "It varies by role, but our average time-to-hire is 14 days. We work with companies that are motivated to hire quickly."
  }
];

export const EMPLOYER_FAQS = [
  {
    question: "What is the difference between Retained and Contingent search?",
    answer: "Retained search is an exclusive partnership typically used for C-suite roles, guaranteeing dedicated resources and a committed timeline. Contingent search is success-based, ideal for mid-level individual contributor roles where speed is the priority."
  },
  {
    question: "What is your replacement guarantee?",
    answer: "We offer an industry-leading 90-day replacement guarantee. If a candidate leaves or is terminated for performance within 3 months, we replace them at no additional cost."
  },
  {
    question: "Do you handle international recruitment?",
    answer: "Yes. We have active talent pipelines in North America, EMEA, and APAC. We can also assist with Employer of Record (EOR) services for remote international hires."
  },
  {
    question: "How do you vet technical candidates?",
    answer: "Our vetting process includes a 3-stage assessment: 1. Behavioral screen for culture fit. 2. Technical challenge (coding/design) reviewed by a domain expert. 3. Deep-dive reference checks from former supervisors."
  }
];
