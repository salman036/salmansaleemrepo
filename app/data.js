export const personalInfo = {
  name: 'Salman Saleem',
  title: 'Software Engineer',
  subtitle: 'React.js · React Native · Next.js · Node.js · Laravel · Docker · Linux',
  email: 'salmansaleem036@gmail.com',
  phone: '(+92) 03044504408',
  location: 'Lahore, Pakistan',
  linkedin: 'https://www.linkedin.com/in/salman-saleem07860/',
  currentPosition: 'Developer at Innovative Saudia',
  summary:
    'Software engineer with 5+ years building production web and mobile products across React.js, Next.js, React Native, Node.js, and Laravel. Experienced in healthcare, travel, fintech, e-commerce, real estate, and SaaS—shipping scalable UIs, APIs, and full-stack features with strong attention to UX and code quality.',
}

/** Core stack highlighted on LinkedIn profile */
export const highlightedSkills = [
  'React.js',
  'React Native',
  'Next.js',
  'Node.js',
  'JavaScript',
  'Laravel',
  'Selenium',
  'Tailwind CSS',
  'Next Auth',
  'Ant Design',
  'UI/UX',
  'Docker',
  'Linux',
]

export const focusAreas = [
  'Healthcare platforms',
  'Travel booking products',
  'Mobile commerce',
  'Multi-tenant SaaS',
]

export const skills = {
  'Core Stack': ['React.js', 'React Native', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript', 'Linux', 'Docker'],
  'UI & Styling': ['Tailwind CSS', 'Ant Design', 'MUI', 'Bootstrap', 'UI/UX', 'HTML', 'CSS'],
  'Auth & Data': ['Next Auth', 'Redux', 'React Query', 'REST API', 'Axios'],
  'Backend & DevOps': ['Laravel', 'Docker', 'Linux', 'Git', 'GitHub', 'Beanstalk'],
  'Testing & QA': ['Selenium', 'Postman', 'Swagger'],
  'Mobile & Tools': ['Android Studio', 'Flask', 'jQuery'],
}

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Innovative Saudia',
    period: 'Jan 2026 – Present',
    location: 'Lahore, Pakistan',
    type: 'Full-Time',
    description: 'Full-scale healthcare platform — Hospital Information System (HIS).',
    highlights: [
      'Architected and led the front end for a hospital information system covering organization setup, services, physician schedules, and patient workflows.',
      'Implemented Redux Toolkit middleware for authentication, API orchestration, session lifecycle, and multi-step form flows.',
      'Built permission-scoped UI rendering for multi-tenant RBAC across hospital entities and user roles.',
      'Designed runtime localization, idle-timeout handling, secure token refresh, and version management for controlled rollouts.',
      'Raised engineering quality with strict TypeScript, linting, formatting, Husky hooks, and structured code reviews.',
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
      'Led front-end delivery for booking and interactive software products, including standups, sprint coordination, and client demos.',
      'Delivered responsive booking flows with improved usability, faster page loads, and cleaner handoff between design and engineering.',
      'Mentored junior developers through reviews, implementation planning, and reusable component patterns.',
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
]

export const projects = [
    {
    name: 'HIS — Hospital Information System',
    subtitle: 'Innovative Saudia · Software Engineer',
    description:
      'Full-scale healthcare platform covering org/center setup, service management, physician scheduling, patient workflows, multi-tenant RBAC, runtime localization, and session & activity management. Built from scratch with React.js + TypeScript.',
    tech: ['React.js', 'TypeScript', 'Redux Toolkit', 'Context API', 'RBAC', 'REST APIs'],
    category: 'SaaS',
    impact: 'Enterprise healthcare workflows with secure access control and localization.',
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
    impact: 'Mobile-first booking experience for hotel, flight, and cruise discovery.',
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
    impact: '30% efficiency improvement across school management workflows.',
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
    impact: 'Production mobile wallet with multi-asset transfers and store release.',
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
    impact: 'Real estate operations tooling for listings, staff, sales, and appointments.',
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
    impact: 'Responsive discovery interface with location-led product browsing.',
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
    impact: 'Shared web and mobile patterns for local business discovery.',
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
    impact: 'End-to-end shopping journey from auth to checkout.',
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
    impact: 'Appointment management flows for owners and customers.',
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
