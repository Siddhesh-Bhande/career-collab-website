# Career Collab

A modern recruitment and talent platform engineered for candidate discovery, employer intake, and centralized recruitment administration.

## Overview

Career Collab is a comprehensive recruitment agency application featuring dedicated workflows for job seekers, employer hiring managers, and internal recruitment teams. The platform bridges the gap between candidate application intake and recruiter placement tracking with real-time state management and role-based administration.

## Key Modules and Workflows

### 1. Candidate Application Portal
- **Interactive Job Search**: Filterable listings across technology, finance, operations, and creative disciplines.
- **Application Flow**: Multi-step application submission capturing professional background, portfolio links, and compensation expectations.
- **Career Resources**: Dedicated insights and guides supporting job seekers through interview preparation.

### 2. Employer Intake and Placement
- **Talent Discovery**: Interface for hiring managers to review verified candidate profiles with skill-matrix matching.
- **Hiring Request Pipeline**: Structured intake forms for employers to submit job requirements, headcount urgency, and team structures.

### 3. Role-Based Admin Dashboard
- **Pipeline Analytics**: Consolidated view tracking applicants, active openings, placement conversion rates, and revenue projections.
- **Candidate Management**: Status transitions (Applied, Screened, Interviewing, Placed, Rejected) with recruiter notes.
- **Job Inventory**: Full CRUD controls for creating, updating, and archiving role postings.
- **Content Management**: Real-time content editor for blog articles, company announcements, and customer testimonials.

## Architecture and Engineering Decisions

```
career-collab/
├── components/          # Reusable UI building blocks (Navbar, Footer, Modals)
├── context/             # Global DataContext providing application state and CRUD
├── pages/               # Top-level route views
│   └── admin/           # Secured admin layout and administrative sub-views
├── types.ts             # TypeScript domain interfaces and status enums
├── constants.ts         # Initial mock datasets and category taxonomies
├── index.html           # HTML entry point with typography and theme tokens
├── index.tsx            # React application mount
└── vite.config.ts       # Vite bundling and optimization configuration
```

### State Management via DataContext
The application centralizes state using React Context with local storage persistence. All candidate submissions, employer requests, and job modifications reflect immediately across the public pages and admin views without requiring full page reloads or backend roundtrips.

### Component Isolation and Modularity
View components are decoupled from data storage through typed hooks and service interfaces. Modals and form handlers use controlled inputs with validation safeguards before state mutation.

## Technology Stack

- **Core**: React 19, TypeScript
- **Routing**: React Router v7 (HashRouter for zero-config client hosting)
- **Styling**: Tailwind CSS with custom branding tokens (Deep Navy, Electric Teal)
- **Icons**: Font Awesome 6
- **Tooling**: Vite, ESLint

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Siddhesh-Bhande/career-collab-website.git
   cd career-collab-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Launch local development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
