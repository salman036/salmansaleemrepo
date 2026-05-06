export const personalInfo = {
  name: 'Salman Saleem',
  title: 'Software Engineer',
  subtitle: 'Front-End & Mobile Development',
  email: 'salmansaleem036@gmail.com',
  phone: '(+92) 03044504408',
  location: 'Lahore, Pakistan',
  linkedin: 'https://www.linkedin.com/in/salman-saleem07860/',
  summary:
    'Software Engineer with 5+ years of experience in front-end and mobile development, specializing in React.js, React Native, and Next.js. Proven track record of building scalable, user-friendly apps and leading cross-functional teams. Skilled in delivering high-performance solutions across e-commerce, fintech, real estate, and SaaS industries.',
}

export const skills = {
  'Core Frontend': ['React.js', 'Next.js', 'React Native', 'HTML', 'CSS'],
  'State & Data': ['Redux', 'React Query', 'Axios', 'Fetch API', 'REST API'],
  'UI Frameworks': ['Tailwind CSS', 'MUI', 'Bootstrap', 'Ant Design'],
  'Tools & Infra': ['Git', 'GitHub', 'Android Studio', 'Beanstalk', 'Laravel'],
  'Testing & QA': ['Selenium', 'Postman', 'Swagger'],
  'Backend Touch': ['Flask', 'Laravel', 'Python', 'jQuery'],
}

export const experience = [
  {
    role: 'Senior React.js Developer',
    company: 'Innovative Saudia',
    period: 'Jan 2026 – Present',
    location: 'Lahore, Pakistan',
    type: 'Full-Time',
    description: 'Full-scale healthcare platform — Hospital Information System (HIS).',
    highlights: [
      'Architected and led frontend development of a full-scale HIS in React.js + TypeScript covering org/center setup, service management, and patient workflows.',
      'Implemented Redux Toolkit middleware for complex async side effects — authentication sequences, API orchestration, session lifecycle, and multi-step form flows.',
      'Leveraged Context API for lightweight, scoped state across localization, theme configuration, and user-preference modules.',
      'Engineered a multi-tenant RBAC system with permission-scoped UI rendering across hospital entities and user roles.',
      'Designed a localization architecture supporting runtime language switching and locale-aware formatting for international deployment.',
      'Built session management with idle-timeout detection, activity tracking, and secure token refresh.',
      'Developed an app version management module for safe, incremental feature rollouts.',
      'Enforced TypeScript strict-mode, ESLint, Prettier, Husky pre-commit hooks; mentored junior engineers via structured code reviews.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'First Travel Company',
    period: '2022 – Present',
    location: 'Lahore',
    type: 'Full-Time',
    description: 'A company focusing on interactive software solutions.',
    highlights: [
      'Lead front-end team, conduct standups, and manage client demos.',
      'Delivered responsive booking solutions, improving UX and reducing load time.',
      'Mentored junior developers, raising code quality and delivery speed.',
    ],
  },
  {
    role: 'Front-End & Mobile Developer',
    company: 'ViralSquare',
    period: 'Aug 2021 – Apr 2022',
    location: 'Lahore, Pakistan',
    type: 'Full-Time',
    description: 'An innovative company specializing in front-end and mobile development.',
    highlights: [
      'Built pixel-perfect React Native apps and responsive React.js web apps.',
      'Integrated REST APIs with Redux/React Query, reducing API errors.',
      'Key projects: LMS, Tutor Dashboard, Online Shopping Apps.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'TDC (The Dev Corporate)',
    period: '2020 – 2021',
    location: 'Lahore',
    type: 'Full-Time',
    description: '',
    highlights: [
      'Developed UIs with React.js, Bootstrap, and SASS; integrated REST APIs.',
      'Collaborated with BA teams for requirements, improving delivery accuracy.',
    ],
  },
  {
    role: 'Jr. Python Developer',
    company: 'Southville Solutions',
    period: '2019 – 2020',
    location: 'Lahore',
    type: 'Full-Time',
    description: '',
    highlights: [
      'Built REST APIs with Flask, documented in Swagger, and tested in Postman.',
      'Contributed to front-end using JS, jQuery, and Bootstrap.',
    ],
  },
]

export const projects = [
    {
    name: 'HIS — Hospital Information System',
    subtitle: 'Innovative Saudia · Senior React.js Developer',
    description:
      'Full-scale healthcare platform covering org/center setup, service management, physician scheduling, patient workflows, multi-tenant RBAC, runtime localization, and session & activity management. Built from scratch with React.js + TypeScript.',
    tech: ['React.js', 'TypeScript', 'Redux Toolkit', 'Context API', 'RBAC', 'REST APIs'],
    category: 'SaaS',
    featured: true,
    url: null,
  },

  {
    name: 'Reversal.com',
    subtitle: 'Booking App',
    description:
      'Global hotel, flight & cruise booking platform built with Next.js. Developed responsive UI and optimized mobile performance for a seamless booking experience.',
    tech: ['Next.js', 'React.js', 'CSS', 'REST API'],
    category: 'Web App',
    featured: true,
    url: null,
  },
  {
    name: 'Youhue',
    subtitle: 'School Management Platform',
    description:
      'Led team development of school management modules, boosting efficiency by 30%. Built SEO-optimized local business discovery with mobile-first design.',
    tech: ['Next.js', 'React Query', 'Tailwind'],
    category: 'SaaS',
    featured: true,
    url: 'https://app.youhue.com',
  },
  {
    name: 'ATARI Smart Wallet',
    subtitle: 'Blockchain Crypto Wallet',
    description:
      'Blockchain-powered crypto wallet app supporting multiple digital assets. Implemented multi-asset send/receive, on/off-chain integration, and Play Store release.',
    tech: ['React Native', 'Blockchain', 'Redux'],
    category: 'Mobile App',
    featured: true,
    url: null,
  },
  {
    name: 'Coleman Group Solutions',
    subtitle: 'Real Estate Platform',
    description:
      'E-commerce platform for buying, renting, and selling properties. Built modules for sales tracking, staff management, and appointment booking.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web App',
    featured: false,
    url: null,
  },
  {
    name: 'Smoky Maps',
    subtitle: 'Delivery App',
    description:
      'Delivery app to locate trusted Marijuana and CBD dispensaries. Designed modern, user-friendly UI with mobile responsiveness.',
    tech: ['React.js', 'REST API', 'CSS'],
    category: 'Web App',
    featured: false,
    url: null,
  },
  {
    name: 'Dig Local',
    subtitle: 'Business Discovery',
    description:
      'Web and mobile app helping users explore local businesses and restaurants. Implemented appointment booking, staff management, and reusable UI components.',
    tech: ['Next.js', 'React Native', 'REST API'],
    category: 'Web & Mobile',
    featured: false,
    url: null,
  },
  {
    name: 'Sandtan',
    subtitle: 'E-Commerce App',
    description:
      'Full-featured e-commerce mobile app with auth, user-specific views, cart, checkout, and social media login integration.',
    tech: ['React Native', 'Redux', 'REST API'],
    category: 'Mobile App',
    featured: false,
    url: null,
  },
  {
    name: 'Salon Scheduler',
    subtitle: 'SPA & Salon Booking',
    description:
      'Complete scheduling app for SPAs and salons. Owners and users can create, edit, and delete appointments with a clean, intuitive interface.',
    tech: ['React.js', 'Redux', 'CSS'],
    category: 'Web App',
    featured: false,
    url: null,
  },
]

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  institution: 'University of Education',
  location: 'Lahore, Pakistan',
}

export const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '5', label: 'Companies' },
  { value: '30%', label: 'Efficiency Boost' },
]
